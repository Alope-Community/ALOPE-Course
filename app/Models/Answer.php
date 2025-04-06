<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = [
        'id', 'user_id', 'question_id', 'answer', 'is_correct'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
