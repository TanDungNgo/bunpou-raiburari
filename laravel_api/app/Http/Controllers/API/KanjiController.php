<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Kanji;
use Validator;

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
        if ($kanji) {
            return response()->json([
                'status' => 200,
                'kanji' => $kanji
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
        $result = DB::table('kanjis')->where('type', $type)->get();
        return response()->json([
            'status' => 200,
            'listKanji' => $result
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'title' => 'required',
            'mean' => 'required',
            'structure' => 'required',
            'example' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $kanji = new Kanji;
            $kanji->type = $request->input('type');
            $kanji->title = $request->input('title');
            $kanji->mean = $request->input('mean');
            $kanji->structure = $request->input('structure');
            $kanji->example = $request->input('example');
            $kanji->user_id = $request->input('user_id');
            $kanji->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'Kanji Added Successfully',
        ]);
    }

    public function destroy($id)
    {
        $kanji = Kanji::find($id);
        $kanji->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Kanji Deleted Successfully',
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'title' => 'required',
            'mean' => 'required',
            'structure' => 'required',
            'example' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $kanji = Kanji::find($id);
            if ($kanji) {
                $kanji->type = $request->input('type');
                $kanji->title = $request->input('title');
                $kanji->mean = $request->input('mean');
                $kanji->structure = $request->input('structure');
                $kanji->example = $request->input('example');
                $kanji->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Kanji Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No ID Found',
                ]);
            }
        }
    }

    public function paging($type, $pageNumber)
    {
        if ($type == "all") {
            $kanjis = Kanji::all();
        } else {
            $kanjis = DB::table('kanjis')->where('type', $type)->get();
        }
        $data = [];
        if (count($kanjis) > 0) {
            // so luong item trong 1 page
            $n = 6;
            if (count($kanjis) % $n == 0) {
                $page = count($kanjis) / $n;
            } else {
                $page = (int)(count($kanjis) / $n) + 1;
            }
            $start = ($pageNumber - 1) * $n;
            $data = [];
            if ($pageNumber == $page) {
                for ($i = $start; $i < count($kanjis); $i++) {
                    $data[] = [
                        "id" => $kanjis[$i]->id,
                        "type" => $kanjis[$i]->type,
                        "title" => $kanjis[$i]->title,
                        "mean" => $kanjis[$i]->mean,
                        "structure" => $kanjis[$i]->structure,
                        "example" => $kanjis[$i]->example,
                    ];;
                }
            } else if ($pageNumber > $page) {
                $data = [];
            } else {
                for ($i = $start; $i < $start + $n; $i++) {
                    $data[] = [
                        "id" => $kanjis[$i]->id,
                        "type" => $kanjis[$i]->type,
                        "title" => $kanjis[$i]->title,
                        "mean" => $kanjis[$i]->mean,
                        "structure" => $kanjis[$i]->structure,
                        "example" => $kanjis[$i]->example,
                    ];
                }
            }
        }
        return response()->json([
            'status' => 200,
            'listKanji' => $data,
        ]);
    }
}
