<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Question;
use Validator;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = DB::table('questions')->select("questions.id", "questions.text")->get();
        $data = [];
        foreach ($questions as $question) {
            $answers = DB::table('answers')->select("answers.id", "answers.text", "answers.isCorrect")
                ->where("answers.question_id", $question->id)->get();
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
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate' => true,
                'message' => 'You need to enter question',
            ]);
        }
        $question = new Question;
        $question->text = $request->input('text');
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
        return response()->json([
            'message' =>  $request->input('text'),
        ]);
    }
}
