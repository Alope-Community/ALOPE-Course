<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\GlossaryController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', LandingPageController::class)->name("home");

Route::get('/coming-soon', function () {
    return Inertia::render('Informational/ComingSoon');
});

Route::get('/access-blocked', function () {
    return Inertia::render('Informational/AccessBlocked');
});

Route::resource('/modules', ArticleController::class);
Route::resource('/courses', CourseController::class);
Route::resource('/videos', VideoController::class);
Route::get('/glosarium/{slug}', [GlossaryController::class, 'show'])->name('glosarium.show');
Route::resource('/blogs', BlogController::class);
// Route::get('/glosarium', [GlossaryController::class, 'index'])->name('glosarium.index');

Route::middleware('auth')->group(function () {
    Route::resource('/quizzes', QuizController::class);
    Route::resource('/answers', AnswerController::class);

    // Profile
    Route::get('/profile', HistoryController::class);
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
require __DIR__ . '/auth.php';
