<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasUuids;

    public $incrementing = false; 
    protected $keyType = 'string'; 

    public function getArticlesAttribute()
    {
        $ids = array_filter(explode(',', $this->article_ids));
        return Module::with("reads")->whereIn('id', $ids)->get();
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }
}
