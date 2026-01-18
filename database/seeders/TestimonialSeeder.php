<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\course;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $courses = Course::all();
    

        if ($users->count() < 13 || $courses->count() < 1) {
            $this->command->error('Not enough users or courses to seed testimonials.');
            return;
        }


        Testimonial::insert([
            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[1]->id,
                'message' => 'Materinya jelas dan mudah dipahami.',
                'rating' => 5,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[2]->id,
                'message' => 'Flexbox dan Grid dijelaskan dengan rapi.',
                'rating' => 5,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[3]->id,
                'message' => 'Layout website jadi lebih terstruktur.',
                'rating' => 4,
                'status' => 'approved',
            ],

            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[4]->id,
                'message' => 'Sangat cocok untuk pemula.',
                'rating' => 5,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[5]->id,
                'message' => 'Penjelasan HTML runtut dan jelas.',
                'rating' => 4,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[6]->id,
                'message' => 'Sekarang paham struktur website.',
                'rating' => 5,
                'status' => 'approved',
            ],

            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[7]->id,
                'message' => 'Belajar CSS jadi tidak membingungkan.',
                'rating' => 4,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[8]->id,
                'message' => 'Contohnya relevan dengan kebutuhan.',
                'rating' => 5,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[9]->id,
                'message' => 'Styling website jadi lebih percaya diri.',
                'rating' => 5,
                'status' => 'approved',
            ],

            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[10]->id,
                'message' => 'Belajar sambil praktik sangat membantu.',
                'rating' => 5,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[0]->id,
                'user_id' => $users[11]->id,
                'message' => 'Pendekatannya menyenangkan.',
                'rating' => 4,
                'status' => 'approved',
            ],
            [
                'course_id' => $courses[1]->id,
                'user_id' => $users[12]->id,
                'message' => 'Konsep jadi lebih cepat dipahami.',
                'rating' => 5,
                'status' => 'approved',
            ],
        ]);
    }
}
