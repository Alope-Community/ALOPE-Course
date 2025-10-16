<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GlossarySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('glosaries')->truncate();

        // ambil course pertama (atau sesuai kebutuhan)
        $course = Course::first();

        if (!$course) {
            $this->command->error('Tidak ada course ditemukan! Jalankan seeder CourseSeeder dulu.');
            return;
        }

        $items = [
            [
                'title' => 'CSS',
                'slug' => 'css',
                'description' => 'Bahasa untuk mendesain tampilan web.',
                'body' => 'CSS (Cascading Style Sheets)...',
            ],
            [
                'title' => 'HTML',
                'slug' => 'html',
                'description' => 'Bahasa markup untuk struktur web.',
                'body' => 'HTML (HyperText Markup Language)...',
            ],
            [
                'title' => 'Machine Learning',
                'slug' => 'machine-learning',
                'description' => 'Machine Learning adalah.......',
                'body' => 'HTML (HyperText Markup Language)...',
            ],
        ];

        foreach ($items as $item) {
            DB::table('glosaries')->insert([
                'id' => (string) Str::uuid(),
                'course_id' => $course->id, // 🔥 ini penting
                'title' => $item['title'],
                'slug' => $item['slug'],
                'description' => $item['description'],
                'body' => $item['body'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
