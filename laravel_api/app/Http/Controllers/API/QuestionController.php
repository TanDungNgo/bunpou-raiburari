<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Question;
use Validator;

use function PHPSTORM_META\type;

class QuestionController extends Controller
{
    public function index($type)
    {
        $questions = DB::table('questions')
            ->select("questions.id", "questions.text")
            ->where("questions.type", $type)
            ->get();
        $data = [];
        foreach ($questions as $question) {
            $answers = DB::table('answers')
                ->select("answers.id", "answers.text", "answers.isCorrect")
                ->where("answers.question_id", $question->id)
                ->get();
            $data[] = [
                "questionId" => $question->id,
                "questionText" => $question->text,
                "answerOptions" => $answers
            ];
        }
        return response()->json([
            'status' => 200,
            'questions' => $data,
        ]);
    }
    public function show()
    {
        $questions = Question::all();
        return response()->json([
            'status' => 200,
            'listQuestion' => $questions,
        ]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required',
            'type' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate' => true,
                'message' => 'You need to enter question',
            ]);
        }
        $question = new Question;
        $question->text = $request->input('text');
        $question->type = $request->input('type');
        $question->user_id = $request->input('user_id');
        $question->save();
        return response()->json([
            'status' => 200,
            'message' => 'Question Added Successfully',
        ]);
    }
    public function edit($id)
    {
        $question = Question::find($id);
        return response()->json([
            'status' => 200,
            'question' => $question,
        ]);
    }
    public function update(Request $request, $id)
    {
        // $validator = Validator::make($request->all(), [
        //     'text' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json([
        //         'validate' => true,
        //         'message' => 'You need to enter question',
        //     ]);
        // }
        // $question = Question::find($id);
        // if ($question) {
        //     $question->text = $request->input('text');
        //     $question->update();
        //     return response()->json([
        //         'status' => 200,
        //         'message' => 'Question Updated Successfully',
        //     ]);
        // } else {
        //     return response()->json([
        //         'status' => 404,
        //         'message' => 'No ID Found',
        //     ]);
        // }
        // return response()->json([
        //     'message' =>  $request->input('text'),
        // ]);
    }
    public function questionFindId($id)
    {
        $question = Question::find($id);
        if ($question) {
            $answers = DB::table('answers')
                ->select("answers.id", "answers.text", "answers.isCorrect")
                ->where("answers.question_id", $question->id)
                ->get();
            return response()->json([
                'status' => 200,
                'question' => $question,
                'answers' => $answers,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No ID Found',
            ]);
        }
    }
    public function createAnswer(Request $request, $id)
    {
        $answer = new Answer;
        $answer->text = $request->input('text');
        if ($request->input('isCorrect') == "true")
            $answer->isCorrect = true;
        else
            $answer->isCorrect = false;
        $answer->question_id = $request->input('question_id');
        $answer->save();
        return response()->json([
            'status' => 200,
        ]);
    }
}
