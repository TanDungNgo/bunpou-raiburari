<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grammar extends Model
{
    use HasFactory;
    protected $table = 'grammars';
    protected $filltable = [
        'type',
        'title',
        'mean',
        'use',
        'structure',
        'example',
    ];
}
