<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Hashtag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseHashtagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = Course::all();
        $hashtags = Hashtag::all();

        foreach ($courses as $course) {
            $randomTags = $hashtags->random(rand(1, 3)); // Pilih 1-3 hashtag acak

            $course->hashtags()->attach($randomTags);
        }
    }
}
