<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MissingPersonController;
use App\Http\Controllers\AlertController;
use App\Http\Controllers\BusinessAdController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    // Protected writes
    Route::post('/missing-persons', [MissingPersonController::class, 'store']);
    Route::post('/business-ads', [BusinessAdController::class, 'store']);
});

// Public reads
Route::get('/missing-persons', [MissingPersonController::class, 'index']);
Route::get('/alerts', [AlertController::class, 'index']);
Route::get('/business-ads', [BusinessAdController::class, 'index']);

// Simple admin/police stats placeholder (optional)
Route::middleware('auth:sanctum')->get('/admin/stats', function () {
    $user = request()->user();
    if (! in_array($user->role, ['admin', 'police'])) {
        return response()->json(['message' => 'Forbidden'], 403);
    }

    return response()->json([
        'users' => \App\Models\User::count(),
        'missing_people' => \App\Models\MissingPerson::count(),
        'alerts' => \App\Models\Alert::count(),
        'business_ads' => \App\Models\BusinessAd::count(),
    ]);
});