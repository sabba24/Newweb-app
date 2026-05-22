<?php

namespace App\Http\Controllers;

use App\Models\MissingPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MissingPersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = (int) ($request->query('limit', 6));
        $items = MissingPerson::latest()->limit($limit)->get();
        return response()->json($items);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['nullable', 'date'],
            'age' => ['nullable', 'integer', 'min:0', 'max:120'],
            'gender' => ['nullable', 'string', 'max:50'],
            'parish' => ['nullable', 'string', 'max:100'],
            'last_seen_location' => ['nullable', 'string', 'max:255'],
            'last_seen_at' => ['nullable', 'date'],
            'date_missing' => ['nullable', 'date'],
            'clothing_last_worn' => ['nullable', 'string'],
            'physical_description' => ['nullable', 'string'],
            'medical_conditions' => ['nullable', 'string'],
            'contact_person_name' => ['nullable', 'string', 'max:255'],
            'contact_phone' => ['nullable', 'string', 'max:50'],
            'relationship' => ['nullable', 'string', 'max:100'],
            'reward_amount' => ['nullable', 'string', 'max:100'],
            'photo_url' => ['nullable', 'url'],
            'status' => ['nullable', 'string', 'max:50'],
            'description' => ['nullable', 'string'],
            'main_photo' => ['nullable', 'image', 'max:5120'],
            'additional_photos.*' => ['nullable', 'image', 'max:5120'],
            'video' => ['nullable', 'file', 'mimetypes:video/mp4,video/quicktime,video/webm', 'max:51200'],
        ]);

        if ($request->hasFile('main_photo')) {
            $validated['photo_url'] = Storage::url($request->file('main_photo')->store('missing-persons', 'public'));
        }

        if ($request->hasFile('additional_photos')) {
            $validated['additional_photos'] = collect($request->file('additional_photos'))
                ->map(fn ($file) => Storage::url($file->store('missing-persons', 'public')))
                ->values()
                ->all();
        }

        if ($request->hasFile('video')) {
            $validated['video_url'] = Storage::url($request->file('video')->store('missing-persons/videos', 'public'));
        }

        $validated['date_missing'] = $validated['date_missing'] ?? $validated['last_seen_at'] ?? null;
        $validated['status'] = $validated['status'] ?? 'submitted_for_review';

        unset($validated['main_photo'], $validated['video']);

        $mp = MissingPerson::create($validated);
        return response()->json($mp, 201);
    }
}