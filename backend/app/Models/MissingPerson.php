<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MissingPerson extends Model
{
    protected $fillable = [
        'name',
        'date_of_birth',
        'age',
        'gender',
        'parish',
        'last_seen_location',
        'last_seen_at',
        'date_missing',
        'clothing_last_worn',
        'physical_description',
        'medical_conditions',
        'contact_person_name',
        'contact_phone',
        'relationship',
        'reward_amount',
        'photo_url',
        'additional_photos',
        'video_url',
        'status',
        'description',
    ];

    protected function casts(): array
    {
        return [
            'additional_photos' => 'array',
            'last_seen_at' => 'datetime',
            'date_of_birth' => 'date',
            'date_missing' => 'date',
        ];
    }
}