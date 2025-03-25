<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Models\Article;
use App\Models\Course;
use App\Models\Video;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    $videos = Video::with(["course.category", "course.hashtags", "course.videos"])->latest('created_at')->get();
    $articles = Article::latest('created_at')->get();

    return Inertia::render('LandingPage', [
        "videos" => $videos,
        "articles" => $articles,
    ]);
});

Route::get('/coming-soon', function () {
    return Inertia::render('Informational/ComingSoon');
});

Route::resource('/articles', ArticleController::class);
Route::resource('/courses', CourseController::class);

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
