<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/jobs', [App\Http\Controllers\Web\JobController::class, 'index']);
Route::get('/job/{id}', [App\Http\Controllers\Web\JobController::class, 'show']);
Route::post('/application', [App\Http\Controllers\Web\JobController::class, 'store']);
Route::post('/job', [App\Http\Controllers\Backend\PostjobsController::class, 'store']);
