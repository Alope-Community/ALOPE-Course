<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Read;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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

        $module = Module::with(["writer", "course.users"])->whereSlug($slug)->first();
        $modules = Module::with("course")->wherePublished(true)->where('slug', '!=', $slug)->latest()->get();


        if ($module->course->visibility == 'private') {
            $user = User::with('courses')->find(Auth::id());
            if (!$module->course->users->contains($user) || !Auth::check()) {
                return redirect("/access-blocked");
            }
        }

        if (Auth::user()) {
            $existingRead = Read::where('user_id', Auth::user()->id)
                ->where('module_id', $module->id)
                ->whereDate('created_at', today())
                ->first();

            if (!$existingRead) {
                Read::create([
                    "user_id" => Auth::user()->id,
                    "module_id" => $module->id,
                    "created_at" => now()
                ]);
            }
        } else {
            Read::create([
                "user_id" => 1,
                "module_id" => $module->id,
                "created_at" => now()
            ]);
        }

        return Inertia::render('Module/Show', [
            "module" => $module,
            "modules" => $modules,
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
