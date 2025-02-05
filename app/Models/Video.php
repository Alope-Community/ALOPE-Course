<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasUuids;

    public $incrementing = false; 
    protected $keyType = 'string'; 

    public function course(){
        return $this->belongsTo(Course::class);
    }
}
