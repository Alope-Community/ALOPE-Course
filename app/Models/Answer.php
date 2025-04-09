<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Answer extends Model
{

    use HasUuids;

    protected $fillable = [
        'id', 'user_id', 'question_id', 'answer', 'is_correct'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
