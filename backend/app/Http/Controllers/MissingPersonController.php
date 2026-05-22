<?php

namespace App\Http\Controllers;

use App\Models\MissingPerson;
use Illuminate\Http\Request;

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
            'age' => ['nullable', 'integer', 'min:0', 'max:120'],
            'last_seen_location' => ['nullable', 'string', 'max:255'],
            'date_missing' => ['nullable', 'date'],
            'photo_url' => ['nullable', 'url'],
            'status' => ['nullable', 'string', 'max:50'],
            'description' => ['nullable', 'string'],
        ]);

        $mp = MissingPerson::create($validated);
        return response()->json($mp, 201);
    }
}
