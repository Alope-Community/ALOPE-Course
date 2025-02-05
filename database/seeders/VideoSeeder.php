<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Video;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $course = Course::inRandomOrder()->first(); 

        if (!$course) {
            return;
        }

        $videos = [
            [
                'title' => 'HTML for Beginner',
                'description' => 'Belajar HTML dari dasar.',
                "link" => "https://www.youtube.com/embed/1WF50180LOU?si=EFHJLGpBpvh5eSb1"
            ],
            [
                'title' => 'CSS for Beginner',
                'description' => 'Dasar-dasar CSS untuk pemula.',
                "link" => "https://www.youtube.com/watch?v=Qc0NjOvYZCE"
            ],
            [
                'title' => 'CSS Layouting',
                'description' => 'Implementasi HTML dan CSS.',
                "link" => "https://www.youtube.com/embed/1WF50180LOU?si=EFHJLGpBpvh5eSb1"
            ],
        ];

        foreach ($videos as $video) {
            Video::create([
                'id' => Str::uuid(),
                'title' => $video['title'],
                'slug' => Str::slug($video['title']),
                'description' => $video['description'],
                'link' => $video['link'],
                'course_id' => $course->id,
            ]);
        }
    }
}
