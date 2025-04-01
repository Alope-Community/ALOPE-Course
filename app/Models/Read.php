<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Read extends Model
{
    protected $fillable = ["user_id", "article_id"];

    public $timestamps = true; // Tetap gunakan timestamps

    // Override agar updated_at tidak dipakai
    public function setUpdatedAt($value)
    {
        return null;
    }
}
