<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::select('title', 'slug', 'cover', 'description')->latest()->paginate(7);

        // return response()->json([
        //     'success' => true,
        //     'message' => 'Blog list fetched successfully',
        //     'datas' => $blogs,
        // ]);
        return inertia('Blog/Index', [
            'blogs' => $blogs,
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
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $blogs = Blog::select('title', 'slug', 'cover')
            ->where('id', '!=', $blog->id)
            ->latest()
            ->take(5)
            ->get();
        return inertia('Blog/Show', [
            'blog' => $blog,
            'blogs' => $blogs,
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
