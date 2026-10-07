<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\TutoringController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductsController::class);
Route::apiResource('tutoring-requests', TutoringController::class);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
