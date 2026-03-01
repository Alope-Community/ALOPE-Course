<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\Answer;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class QuizController extends Controller
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
        $quiz = Quiz::with('questions', 'course.users')->whereSlug($slug)->first();
        
        if ($quiz->course && $quiz->course->visibility === 'private') {
            $user = Auth::user();
            if (!$user || !$quiz->course->users->contains($user)) {
                return redirect('/access-blocked');
            }
        }

        $answers = Answer::whereHas('question', function ($query) use ($quiz) {
            $query->where('quiz_id', $quiz->id);
        })->where('user_id', Auth::user()->id)->get();
        $done = false;
        if (count($answers) == count($quiz->questions)) {
            $done = true;
        }

        return Inertia::render('Quiz/Show', [
            "quiz" => $quiz,
            "answers" => $answers,
            "done" => $done
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
