<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Kanji;

class KanjiController extends Controller
{
    public function index()
    {
        $listKanji = Kanji::all();
        return response()->json([
            'status' => 200,
            'listKanji' => $listKanji,
        ]);
    }
    public function search($search)
    {
        $result = DB::table('kanjis')->where('mean', 'like', '%' . $search . '%')->get();
        return response()->json([
            'status' => 200,
            'listKanji' => $result
        ]);
    }
    public function show($id)
    {
        $kanji = Kanji::find($id);
        return response()->json([
            'status' => 200,
            'Kanji' => $kanji,
        ]);
    }
    public function searchType($type)
    {
        $result = DB::table('kanjis')->where('type', $type)->get();
        return response()->json([
            'status' => 200,
            'listKanji' => $result
        ]);
    }
}
