<?php

namespace Database\Seeders;

use App\Models\Hashtag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class HashtagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Hashtag::insert([
            [
                "id" => Str::uuid(),
                "name" => "Laravel",
                "slug" => "laravel",
                "description" => "Hashtag khusus course laravel.",
                "icon" => "laravel.svg",
            ],
            [
                "id" => Str::uuid(),
                "name" => "Vue",
                "slug" => "vue",
                "description" => "Hashtag khusus course Vue.",
                "icon" => "vue.svg",
            ],
            [
                "id" => Str::uuid(),
                "name" => "React",
                "slug" => "react",
                "description" => "Hashtag khusus course react.",
                "icon" => "react.svg",
            ],
            [
                "id" => Str::uuid(),
                "name" => "HTML",
                "slug" => "HTML",
                "description" => "Hashtag khusus course HTML.",
                "icon" => "HTML.svg",
            ],
            [
                "id" => Str::uuid(),
                "name" => "CSS",
                "slug" => "CSS",
                "description" => "Hashtag khusus course CSS.",
                "icon" => "CSS.svg",
            ],
        ]);
    }
}
