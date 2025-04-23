<?php

namespace App\Http\Controllers;

use App\Models\Read;
use App\Models\Answer;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HistoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {

        //  for History
        $reads = Read::whereUserId(Auth::id())
            ->get()
            ->groupBy('article_id')
            ->map(function ($group) {
                $article = $group->first()->article;
                $latestCreatedAt = $group->max('created_at');

                return [
                    'history' => [
                        'id' => $article->id,
                        'title' => $article->title,
                        'slug' => $article->slug,
                        'type' => 'article'
                    ],
                    'logs' => $group->values(),
                    'created_at' => $latestCreatedAt
                ];
            })
            ->values();

        $answers = Answer::whereUserId(Auth::id())
            ->with('question.quiz')
            ->get()
            ->groupBy('question.quiz_id')
            ->map(function ($group) {
                $quiz = $group->first()->question->quiz;
                $latestCreatedAt = $group->max('created_at');

                return [
                    'history' => [
                        'id' => $quiz->id,
                        'title' => $quiz->title,
                        'slug' => $quiz->slug,
                        'type' => 'quiz'
                    ],
                    'logs' => $group->values(),
                    'created_at' => $latestCreatedAt
                ];
            })
            ->values();

        $histories = $reads->concat($answers)
            ->sortByDesc('created_at')
            ->values();

        // Kelas yang diikuti
        $courses = Course::whereHas('users', function ($query) {
            $query->whereUserId(Auth::id());
        })->with('articles', 'quizzes')->get();

        return Inertia::render('Profile/History', [
            "histories" => $histories,
            "courses" => $courses,
        ]);
    }
}
