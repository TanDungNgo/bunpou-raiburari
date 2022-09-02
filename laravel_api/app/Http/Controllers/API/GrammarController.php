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
        $listGrammar = Grammar::all();
        return response()->json([
            'status' => 200,
            'listGrammar' => $listGrammar,
        ]);
    }
    public function show($id)
    {
        $grammar = Grammar::find($id);
        return response()->json([
            'status' => 200,
            'grammar' => $grammar
        ]);
    }
    public function searchType($type)
    {
        $result = DB::table('grammars')->where('type', $type)->get();
        return response()->json([
            'status' => 200,
            'listGrammar' => $result
        ]);
    }
}
