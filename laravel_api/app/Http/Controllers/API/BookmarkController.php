<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BookmarkKanji;
use App\Models\Grammar;
use App\Models\Kanji;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BookmarkController extends Controller
{
    public function index($id)
    {
        $Kanji = DB::table('bookmark_kanjis')->where('user_id', $id)->get();
        $Grammar = DB::table('bookmark_grammars')->where('user_id', $id)->get();
        $listKanji = [];
        $listGrammar = [];
        foreach ($Kanji as $item) {
            $kanji = Kanji::find($item->kanji_id);
            $listKanji[] = $kanji;
        }
        foreach ($Grammar as $item) {
            $grammar = Grammar::find($item->grammar_id);
            $listGrammar[] = $grammar;
        };


        return response()->json([
            'status' => 200,
            'listKanji' => $listKanji,
            'listGrammar' => $listGrammar,
        ]);
    }

    public function Kanji($id)
    {
        $bookmarkedKanjis = DB::table('bookmark_kanjis')->select("bookmark_kanjis.id", "bookmark_kanjis.kanji_id")->where('user_id', $id)->get();
        return response()->json([
            'status' => 200,
            'bookmarkedKanjis' => $bookmarkedKanjis,
        ]);
    }

    public function bookmarkedKanji(Request $request)
    {
        $bookmarked = new BookmarkKanji;
        $bookmarked->user_id = $request->input('user_id');
        $bookmarked->kanji_id = $request->input('kanji_id');
        $bookmarked->save();
        return response()->json([
            'status' => 200,
            'message' => "Bookmark successed"
        ]);
    }

    public function unbookmarkedKanji($id)
    {
        $unbookmarked = BookmarkKanji::find($id);
        $unbookmarked->delete();
        return response()->json([
            'status' => 200,
            'message' =>  "Unbookmark successed"
        ]);
    }
}
