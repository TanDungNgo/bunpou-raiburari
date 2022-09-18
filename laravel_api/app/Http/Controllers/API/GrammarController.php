<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Grammar;
use Validator;

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
        if ($grammar) {
            return response()->json([
                'status' => 200,
                'grammar' => $grammar
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No ID Found',
            ]);
        }
    }
    public function searchType($type)
    {
        $result = DB::table('grammars')->where('type', $type)->get();
        return response()->json([
            'status' => 200,
            'listGrammar' => $result
        ]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'title' => 'required',
            'mean' => 'required',
            'use' => 'required',
            'structure' => 'required',
            'example' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $grammar = new Grammar;
            $grammar->type = $request->input('type');
            $grammar->title = $request->input('title');
            $grammar->mean = $request->input('mean');
            $grammar->use = $request->input('use');
            $grammar->structure = $request->input('structure');
            $grammar->example = $request->input('example');
            $grammar->user_id = $request->input('user_id');
            $grammar->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'Grammar Added Successfully',
        ]);
    }

    public function destroy($id)
    {
        $grammar = Grammar::find($id);
        $grammar->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Grammar Deleted Successfully',
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'title' => 'required',
            'mean' => 'required',
            'use' => 'required',
            'structure' => 'required',
            'example' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $grammar = Grammar::find($id);
            if ($grammar) {
                $grammar->type = $request->input('type');
                $grammar->title = $request->input('title');
                $grammar->mean = $request->input('mean');
                $grammar->use = $request->input('use');
                $grammar->structure = $request->input('structure');
                $grammar->example = $request->input('example');
                $grammar->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Grammar Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No ID Found',
                ]);
            }
        }
    }
}
