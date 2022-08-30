<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookmarkKanji extends Model
{
    use HasFactory;
    protected $table = 'bookmark_kanjis';
    protected $filltable = [
        'user_id',
        'kanji_id',
    ];
}
