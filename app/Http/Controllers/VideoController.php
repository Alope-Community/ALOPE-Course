<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        // Ambil video berdasarkan slug dan relasi course
        $video = Video::with('course')->whereSlug($slug)->firstOrFail();

        // Ambil semua video lain dalam course yang sama
        $videos = Video::where('course_id', $video->course_id)
                    ->orderBy('created_at', 'ASC')
                    ->get();

                    
        $articles = $video->articles;

        if ($video->course->visibility == 'private') {
            $user = User::with('courses')->find(Auth::id());
            if (!$video->course->users->contains($user) || !Auth::check()) {
                return redirect("/access-blocked");
            }
        }

        return Inertia::render('Video/Show', [
            'videos' => $videos,
            'video' => $video,
            'articles' => $articles,
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
