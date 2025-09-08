<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $courses = Course::with([
            'articles' => function ($query) {
                $query->latest();
            },
            'quizzes' => function ($query) {
                $query->latest();
            },
            'hashtags',
            'videos'
        ])->latest()->get();

        $articles = Article::with("course")->wherePublished(true)->latest()->get();

        return Inertia::render('Course/Index', [
            "courses" => $courses,
            "articles" => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $course = Course::with(['articles' => function ($query) {
            $query->latest();
        }, 'quizzes' => function ($query) {
            $query->latest();
        }, 'hashtags', 'videos' => function ($query) {
            $query->oldest();
        }])->whereSlug($slug)->first();

        $courses = Course::with(['articles' => function ($query) {
            $query->latest();
        }, 'hashtags'])->where('slug', '!=', $slug)->latest()->get();

        // $articles = Article::with("course")->wherePublished(true)->latest()->get();

        return Inertia::render('Course/Show', [
            "course" => $course,
            "courses" => $courses,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
