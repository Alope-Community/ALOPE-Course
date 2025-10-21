<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Glosary extends Model
{
    use HasUuids;

    protected $table = 'glosaries';
    protected $fillable = ['title', 'slug', 'description', 'body'];

    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }
}
