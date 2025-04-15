<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Course;
use App\Models\Video;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $courses = Course::with(["articles"])->latest()->get();
        $videos = Video::with(["course.category", "course.hashtags", "course.videos"])->latest('created_at')->get();
        $articles = Article::with("reads")->latest('created_at')->get();

        return Inertia::render('LandingPage', [
            "videos" => $videos,
            "articles" => $articles,
            "courses" => $courses,
        ]);
    }
}
