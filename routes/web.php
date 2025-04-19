<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Route::get('/', function () {
//     $courses = Course::with(["articles"])->latest()->get();
//     $videos = Video::with(["course.category", "course.hashtags", "course.videos"])->latest('created_at')->get();
//     $articles = Article::with("reads")->latest('created_at')->get();

//     return Inertia::render('LandingPage', [
//         "videos" => $videos,
//         "articles" => $articles,
//         "courses" => $courses,
//     ]);
// })->name("home");

Route::get('/', LandingPageController::class)->name("home");

Route::get('/coming-soon', function () {
    return Inertia::render('Informational/ComingSoon');
});

Route::get('/access-blocked', function () {
    return Inertia::render('Informational/AccessBlocked');
});

Route::resource('/articles', ArticleController::class);
Route::resource('/courses', CourseController::class);

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

// Route::middleware('auth')->group(function () {
//     // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::get('/profile', HistoryController::class);
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
