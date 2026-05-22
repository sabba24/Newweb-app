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
});

Route::get('/missing-persons', [MissingPersonController::class, 'index']);
Route::post('/missing-persons', [MissingPersonController::class, 'store']);

Route::get('/alerts', [AlertController::class, 'index']);

Route::get('/business-ads', [BusinessAdController::class, 'index']);
Route::post('/business-ads', [BusinessAdController::class, 'store']);