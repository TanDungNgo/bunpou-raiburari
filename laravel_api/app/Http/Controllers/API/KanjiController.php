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
        $list_kanji = Kanji::all();
        return response()->json([
            'status' => 200,
            'list_kanji' => $list_kanji,
        ]);
    }
}
