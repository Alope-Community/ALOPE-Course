<?php

namespace App\Http\Controllers;

use App\Models\Read;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HistoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $reads = Read::whereUserId(Auth::id())
            ->get()
            ->groupBy('article_id')
            ->map(function ($group, $articleId) {
                $article = $group->first()->article;

                return [
                    'article' => [
                        'id' => $article->id,
                        'title' => $article->title,
                        'slug' => $article->slug,
                    ],
                    'reads' => $group->values(),
                ];
            })
            ->values();


        return Inertia::render('Profile/History', [
            "reads" => $reads
        ]);
    }
}
