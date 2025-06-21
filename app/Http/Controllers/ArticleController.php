<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Read;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $articles = Article::with("course")->wherePublished(true)->latest()->paginate(7);

        return Inertia::render('Article/Index', [
            "articles" => $articles
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

        $article = Article::with(["writer", "course.users"])->whereSlug($slug)->first();
        $articles = Article::with("course")->wherePublished(true)->where('slug', '!=', $slug)->latest()->get();


        if ($article->course->visibility == 'private') {
            $user = User::with('courses')->find(Auth::id());
            if (!$article->course->users->contains($user) || !Auth::check()) {
                return redirect("/access-blocked");
            }
        }

        if (Auth::user()) {
            $existingRead = Read::where('user_id', Auth::user()->id)
                ->where('article_id', $article->id)
                ->whereDate('created_at', today())
                ->first();

            if (!$existingRead) {
                Read::create([
                    "user_id" => Auth::user()->id,
                    "article_id" => $article->id,
                    "created_at" => now()
                ]);
            }
        } else {
            Read::create([
                "user_id" => 1,
                "article_id" => $article->id,
                "created_at" => now()
            ]);
        }

        return Inertia::render('Article/Show', [
            "article" => $article,
            "articles" => $articles,
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
