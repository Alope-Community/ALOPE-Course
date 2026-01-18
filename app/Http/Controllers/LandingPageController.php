<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Course;
use App\Models\Testimonial;
use App\Models\Module;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $courses = Course::with(["modules", 'category', 'videos'])->latest()->get();
        $modules = Module::with(['reads', 'course', 'writer'])
            ->withCount('reads') 
            ->where('published', true)
            ->orderBy('reads_count', 'desc')
            ->limit(3)
            ->get();

        $latestModule = Module::with(['course', 'writer', 'reads'])->latest()->first();

        $blogs = Blog::select('title', 'slug', 'cover', 'description')
            ->latest()
            ->take(3)
            ->get();

        $testimonials = Testimonial::with('user')
            ->where('status', 'approved')
            ->latest()
            ->limit(3)
            ->get();

        return Inertia::render('LandingPage', [
            "latestModule" => $latestModule,
            "modules" => $modules,
            "courses" => $courses,
            "blogs" => $blogs,
            "testimonials" => $testimonials,
        ]);
    }
}
