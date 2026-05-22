<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MissingPersonController;
use App\Http\Controllers\AlertController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
});

Route::get('/missing-persons', [MissingPersonController::class, 'index']);
Route::get('/alerts', [AlertController::class, 'index']);
