<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Question;

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
}
