<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = Category::inRandomOrder()->first(); 

        if (!$category) {
            return;
        }

        $courses = [
            ['title' => 'HTML Dasar', 'description' => 'Belajar HTML dari dasar.'],
            ['title' => 'CSS Dasar', 'description' => 'Dasar-dasar CSS untuk pemula.'],
            ['title' => 'CSS Layouting', 'description' => 'Latihan Membuat Website Statis dengan HTML & CSS'],
        ];

        foreach ($courses as $course) {
            Course::create([
                'id' => Str::uuid(),
                'title' => $course['title'],
                'slug' => Str::slug($course['title']),
                'description' => $course['description'],
                'cover' => "",
                'visibility' => "public",
                'category_id' => $category->id,
            ]);
        }
    }
}
