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
        $courses = Course::with(["articles", "category", 'videos'])->latest()->get();
        // $videos = Video::with(["course.category", "course.hashtags", "course.videos"])->latest('created_at')->get();
        $articles = Article::with('reads')
            ->withCount('reads') 
            ->where('published', true)
            ->orderBy('reads_count', 'desc')
            ->limit(7)
            ->get();

        $latestArticle = Article::with(['course', 'writer', 'reads'])->latest()->first();

        return Inertia::render('LandingPage', [
            // "videos" => $videos,
            "latestArticle" => $latestArticle,
            "articles" => $articles,
            "courses" => $courses,
        ]);
    }
}
