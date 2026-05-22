<?php

namespace App\Http\Controllers;

use App\Models\BusinessAd;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BusinessAdController extends Controller
{
    public function index(Request $request)
    {
        $limit = (int) ($request->query('limit', 20));
        return response()->json(BusinessAd::latest()->limit($limit)->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'business_name' => ['required', 'string', 'max:255'],
            'ad_title' => ['required', 'string', 'max:255'],
            'promo_description' => ['required', 'string'],
            'discount_amount' => ['nullable', 'string', 'max:100'],
            'website_url' => ['required', 'url'],
            'call_phone' => ['required', 'string', 'max:50'],
            'location' => ['required', 'string', 'max:255'],
            'cta_type' => ['required', 'in:Shop Now,Call Now,Learn More,Book Now'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after_or_equal:start_date'],
            'budget' => ['nullable', 'string', 'max:100'],
            'ad_image' => ['nullable', 'image', 'max:8192'],
        ]);

        if ($request->hasFile('ad_image')) {
            $validated['image_url'] = Storage::url($request->file('ad_image')->store('business-ads', 'public'));
        }

        $validated['status'] = 'submitted_for_review_payment';

        unset($validated['ad_image']);

        return response()->json(BusinessAd::create($validated), 201);
    }
}