<?php

use App\Http\Controllers\API\GrammarController;
use App\Http\Controllers\API\KanjiController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\BookmarkController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Kanji
Route::get('/list-kanji', [KanjiController::class, 'index']);
Route::get('/search/q={search}', [KanjiController::class, 'search']);
Route::get('/kanji/{id}', [KanjiController::class, 'show']);
Route::get('/list-kanji/{type}', [KanjiController::class, 'searchType']);
Route::post('/add-kanji', [KanjiController::class, 'store']);
Route::delete('/delete-kanji/{id}', [KanjiController::class, 'destroy']);
Route::put('/update-kanji/{id}', [KanjiController::class, 'update']);

// Grammar
Route::get('/list-grammar', [GrammarController::class, 'index']);
Route::get('/grammar/{id}', [GrammarController::class, 'show']);
Route::get('/list-grammar/{type}', [GrammarController::class, 'searchType']);
Route::post('/add-grammar', [GrammarController::class, 'store']);
Route::delete('/delete-grammar/{id}', [GrammarController::class, 'destroy']);
Route::put('/update-grammar/{id}', [GrammarController::class, 'update']);

// Question
Route::get('/questions/{type}', [QuestionController::class, 'index']);
Route::get('/list-question', [QuestionController::class, 'show']);
Route::post('/add-question', [QuestionController::class, 'store']);
Route::get('/edit-question/{id}', [QuestionController::class, 'edit']);
Route::put('/update-question/{id}', [QuestionController::class, 'update']);
Route::get('/question/{id}', [QuestionController::class, 'questionFindId']);
Route::post('/add-answer/{id}', [QuestionController::class, 'createAnswer']);

// User
Route::post('/users/login', [UserController::class, 'onLogin']);
Route::post('/users/register', [UserController::class, 'register']);

// Bookmark
Route::get('/bookmarked/{id}', [BookmarkController::class, 'index']);
Route::get('/bookmarkKanjis/{id}', [BookmarkController::class, 'Kanji']);
Route::post('/bookmarkedKanji', [BookmarkController::class, 'bookmarkedKanji']);
Route::delete('/unbookmarkedKanji/{id}', [BookmarkController::class, 'unbookmarkedKanji']);
