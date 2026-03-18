<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Read;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $modules = Module::with("course")->wherePublished(true)->latest()->paginate(7);

        return Inertia::render('Module/Index', [
            "modules" => $modules
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
        $module = Module::with(["writer", "course.users"])
            ->whereSlug($slug)
            ->firstOrFail();

        $modules = Module::with("course")
            ->wherePublished(true)
            ->where('slug', '!=', $slug)
            ->latest()
            ->get();

        $user = Auth::user();

        $isJoined = $user 
            ? $module->course->users->contains($user->id)
            : false;
        if ($user) {
            Read::firstOrCreate(
                [
                    "user_id" => $user->id,
                    "module_id" => $module->id,
                    "created_at" => today(),
                ],
                [
                    "created_at" => now(),
                ]
            );
        }

        return Inertia::render('Module/Show', [
            "module" => [
                "id" => $module->id,
                "title" => $module->title,
                "body" => $module->body,
                "body_preview" => Str::limit($module->body, 3000),
            ],
            "modules" => $modules,
            "isJoined" => $isJoined,
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

    /**
     * Join a course related to module.
     */
    public function join(string $slug)
    {
        $user = auth()->user();
        
        if (!$user) {
            return redirect()->route('login');
        }

        $module = Module::with('course')->whereSlug($slug)->firstOrFail();
        $course = $module->course;

        if (!$course) {
            return back()->withErrors(['message' => 'Course not found']);
        }

        if ($course->users()->where('user_id', $user->id)->exists()) {
            return back();
        }

        $course->users()->attach($user->id);

        return back();
    }
}
