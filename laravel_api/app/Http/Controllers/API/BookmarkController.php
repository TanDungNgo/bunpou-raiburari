<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BookmarkKanji;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BookmarkController extends Controller
{
    public function bookmark($id)
    {
        $Kanji = DB::table('bookmark_kanjis')->where('user_id', $id)->get();
        $Grammar = DB::table('bookmark_grammars')->where('user_id', $id)->get();
        $listKanji = [];
        $listGrammar = [];
        foreach ($Kanji as $item) {
            $kanji = DB::table('kanjis')->where("id", $item->id)->get();
            $listKanji[] = [
                "id" => $kanji[0]->id,
                "type" => $kanji[0]->type,
                "title" => $kanji[0]->title,
                "mean" => $kanji[0]->mean,
                "structure" => $kanji[0]->structure,
                "example" => $kanji[0]->example,
            ];
        }
        foreach ($Grammar as $item) {
            $kanji = DB::table('grammars')->where("id", $item->id)->get();
            $listGrammar[] = [
                "id" => $kanji[0]->id,
                "type" => $kanji[0]->type,
                "title" => $kanji[0]->title,
                "mean" => $kanji[0]->mean,
                "use" => $kanji[0]->use,
                "structure" => $kanji[0]->structure,
                "example" => $kanji[0]->example,
            ];
        };


        return response()->json([
            'status' => 200,
            'listKanji' => $listKanji,
            'listGrammar' => $listGrammar,
        ]);
    }

    public function bookmarkKanji($id)
    {
        $listKanji = DB::table('bookmark_kanjis')->select("bookmark_kanjis.kanji_id")->where('user_id', $id)->get();
        return response()->json([
            'status' => 200,
            'listKanji' => $listKanji,
        ]);
    }
}
