<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Glosary;
use App\Models\Module;
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
            'modules' => function ($query) {
                $query->latest();
            },
            'quizzes' => function ($query) {
                $query->latest();
            },
            'hashtags',
            'videos'
        ])->latest()->get();

        $modules = Module::with("course")->wherePublished(true)->latest()->get();

        return Inertia::render('Course/Index', [
            "courses" => $courses,
            "modules" => $modules,
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
        $course = Course::with([
            'modules' => function ($query) {
                $query->latest();
            },
            'quizzes' => function ($query) {
                $query->latest();
            },
            'hashtags',
            'videos' => function ($query) {
                $query->latest();
            },
            'glosaries' => function ($query) {
                $query->select('glosaries.id', 'title', 'description')
                    ->get();
            }
        ])->whereSlug($slug)->firstOrFail();

        $courses = Course::with([
            'modules' => function ($query) {
                $query->latest();
            },
            'hashtags'
        ])->where('slug', '!=', $slug)->latest()->get();

        $glosaries = Glosary::select('glosaries.id', 'title', 'description', 'slug', 'body')
            ->whereHas('courses', function ($query) use ($course) {
                $query->where('courses.id', $course->id);
            })
            ->orderBy('slug')
            ->get();

        $glosariesAll = $course->glosaries;

        return Inertia::render('Course/Show', [
            "course" => $course,
            "courses" => $courses,
            "glosaries" => $glosaries,
            "glosariesAll" => $glosariesAll,
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
