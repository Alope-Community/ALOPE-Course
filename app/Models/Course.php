<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function hashtags()
    {
        return $this->belongsToMany(Hashtag::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
