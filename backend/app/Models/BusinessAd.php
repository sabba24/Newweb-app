<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessAd extends Model
{
    protected $fillable = [
        'business_name',
        'ad_title',
        'promo_description',
        'discount_amount',
        'website_url',
        'call_phone',
        'location',
        'cta_type',
        'image_url',
        'start_date',
        'end_date',
        'budget',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }
}