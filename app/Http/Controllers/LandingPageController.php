<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Module;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $courses = Course::with(["modules"])->latest()->get();
        // $videos = Video::with(["course.category", "course.hashtags", "course.videos"])->latest('created_at')->get();
        $modules = Module::with('reads')
            ->withCount('reads') 
            ->where('published', true)
            ->orderBy('reads_count', 'desc')
            ->limit(7)
            ->get();

        $latestModule = Module::with(['course', 'writer', 'reads'])->latest()->first();

        return Inertia::render('LandingPage', [
            // "videos" => $videos,
            "latestModule" => $latestModule,
            "modules" => $modules,
            "courses" => $courses,
        ]);
    }
}
