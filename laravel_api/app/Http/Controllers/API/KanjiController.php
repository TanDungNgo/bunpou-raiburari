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
        $result = DB::table('kanji')->where('mean','like','%'.$search.'%')->get();
        return response()->json([
            'status' => 200,
            'listKanji' => $result
        ]);
    }
}
