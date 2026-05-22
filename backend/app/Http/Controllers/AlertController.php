<?php

namespace App\Http\Controllers;

use App\Models\Alert;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = (int) ($request->query('limit', 5));
        $items = Alert::latest()->limit($limit)->get();
        return response()->json($items);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
            'severity' => ['nullable', 'in:info,warning,critical'],
        ]);

        $alert = Alert::create($validated);
        return response()->json($alert, 201);
    }
}
