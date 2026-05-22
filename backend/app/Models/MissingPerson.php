<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MissingPerson extends Model
{
    protected $fillable = [
        'name',
        'age',
        'last_seen_location',
        'date_missing',
        'photo_url',
        'status',
        'description',
    ];
}
