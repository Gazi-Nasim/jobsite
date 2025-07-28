<?php

use App\Http\Controllers\Backend\DetailsController;
use App\Http\Controllers\Backend\PostjobsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Web/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified',]], function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::resource('/job', PostjobsController::class)->names('admin.job')->middleware('admin');
});


Route::middleware('auth')->group(function (f) {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// Routes for frontend

Route::get('/jobs/{id}', function ($id) { return Inertia::render('Web/Details', ['id' => $id]); })->name('job.show');
Route::get('/apply/{id}', function ($id) { return Inertia::render('Web/Apply', ['id' => $id]); })->name('job.apply');
