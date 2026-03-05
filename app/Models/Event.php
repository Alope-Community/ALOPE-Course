<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_category_id',
        'name',
        'date',
        'location',
        'cover',
    ];

    public function category()
    {
        return $this->belongsTo(EventCategory::class, 'event_category_id', 'id');
    }
}
