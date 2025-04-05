<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Answer, Question};
use Illuminate\Support\Str;

class AnswerController extends Controller
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
        foreach ($request->answers as $answer) {
            $question = Question::find($answer['question_id']);

            Answer::create([
                'id' => Str::uuid(),
                'question_id' => $answer['question_id'],
                'answer' => $answer['answer'],
                'user_id' => auth()->user()->id,
                'is_correct' => $answer['answer'] == $question->correct_answer ? 1 : 0,
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
