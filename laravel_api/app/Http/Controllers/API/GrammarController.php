<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Grammar;

class GrammarController extends Controller
{
    public function index()
    {
        $list_grammar = Grammar::all();
        return response()->json([
            'status' => 200,
            'list_kanji' => $list_grammar,
        ]);
    }
}
