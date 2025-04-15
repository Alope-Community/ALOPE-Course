<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\LandingPageController;
use App\Models\Course;
use App\Models\Video;
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

Route::resource('/articles', ArticleController::class);
Route::resource('/courses', CourseController::class);

Route::middleware('auth')->group(function () {
    Route::resource('/quizzes', QuizController::class);
    Route::resource('/answers', AnswerController::class);

    // 
    Route::get('/profile/history', HistoryController::class);
});

Route::get('/test-api/courses', function () {
    $courses = Course::with(["category", "hashtags", "videos"])->get();
    return response()->json($courses);
});
Route::get('/test-api/videos', function () {
    $videos = Video::with(["course.category", "course.hashtags"])->get();
    return response()->json($videos);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
