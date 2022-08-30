<?php

namespace App\Http\Controllers;

use App\Models\BookmarkKanji;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    public function bookmark($id)
    {
        $listKanji = DB::table('bookmark_kanjis')->where('user_id', $id)->get();
        $listGrammar = DB::table('bookmark_grammars')->where('user_id', $id)->get();
        $dataKanji = [];
        $dataGrammar = [];
        $data = [];
        foreach ($listKanji as $item) {
            $kanji = DB::table('kanjis')->where("id", $item->id)->get();
            $dataKanji[] = [
                "id" => $kanji[0]->id,
                "type" => $kanji[0]->type,
                "title" => $kanji[0]->title,
                "mean" => $kanji[0]->mean,
                "structure" => $kanji[0]->structure,
                "example" => $kanji[0]->example,
            ];
        }
        foreach ($listGrammar as $item) {
            $kanji = DB::table('grammars')->where("id", $item->id)->get();
            $dataGrammar[] = [
                "id" => $kanji[0]->id,
                "type" => $kanji[0]->type,
                "title" => $kanji[0]->title,
                "mean" => $kanji[0]->mean,
                "use" => $kanji[0]->use,
                "structure" => $kanji[0]->structure,
                "example" => $kanji[0]->example,
            ];
        }
        $data[] = [
            "listKanji" => $dataKanji,
            "listGrammar" => $dataGrammar,
        ];

        return response()->json([
            'status' => 200,
            'data' => $data,
        ]);
    }
}
