<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = [
            'Sangkanika Edugarden',
            'Universitas Kuningan',
            'Universitas Indonesia',
            'Universitas Padjadjaran',
            'Bandung Techno Park',
            'Online',
            'Zoom Meeting',
            'Google Meet',
        ];

        $speakers = [
            'Dr. Andi Wijaya, M.Kom (AI Researcher)',
            'Rina Setiawan, S.T (Data Scientist at Tech Company)',
            'Budi Hartono (Machine Learning Engineer)',
            'Dewi Lestari (AI Consultant & Trainer)',
            'Ahmad Fauzi (Senior Data Analyst)',
        ];

        $eventNamesCategory1 = [
            'Data Science From Zero To Hero',
            'Deep Learning Intensive Class',
            'AI & Machine Learning Workshop',
            'Advanced Python for Data Science',
            'Neural Networks Bootcamp',
        ];

        $eventNamesCategory2 = [
            'Data Science From Scratch',
            'Machine Learning Bootcamp',
            'Data Visualization Workshop',
            'Statistics for Data Science',
            'Big Data Analysis Seminar',
            'Predictive Analytics Workshop',
            'Data Mining Intensive',
        ];

        $eventNamesCategory3 = [
            'AI for Beginners Webinar',
            'Machine Learning Webinar Series',
            'Deep Learning Online Bootcamp',
            'Python for AI Webinar',
            'Neural Networks Webinar',
            'AI Ethics Online Seminar',
            'Data Science Community Meetup',
            'Big Data Webinar',
            'Data Science From Zero To Hero (Online)',
        ];

        for ($i = 1; $i <= 50; $i++) {

            $category = ($i % 3) + 1;

            if ($category === 1) {
                $name = $eventNamesCategory1[array_rand($eventNamesCategory1)] . " Day " . rand(1, 5);
            } elseif ($category === 2) {
                $name = $eventNamesCategory2[array_rand($eventNamesCategory2)];
            } else {
                $name = $eventNamesCategory3[array_rand($eventNamesCategory3)];
            }

            if ($category === 3) {
                $location = $locations[array_rand(array_slice($locations, 5))];
                $registerLink = "https://zoom.us/j/" . rand(100000000, 999999999);
            } else {
                $location = $locations[array_rand(array_slice($locations, 0, 5))];
                $registerLink = null;
            }

            $month = rand(11, 12);
            $day = rand(1, 28);
            $date = sprintf("2025-%02d-%02d", $month, $day);

            $speaker = $speakers[array_rand($speakers)];

            $description = "
                <div class='space-y-10'>

                    <!-- Deskripsi Acara -->
                    <div>
                        <h3 class='text-2xl font-bold text-gray-900 mb-4 relative pl-4 border-l-4 border-blue-500'>
                            Deskripsi Acara
                        </h3>
                        <p class='text-gray-700 leading-relaxed text-lg'>
                            {$name} merupakan program pelatihan intensif yang dirancang untuk membantu peserta memahami 
                            konsep dasar hingga lanjutan dalam bidang 
                            <span class='font-semibold text-blue-600'>Data Science</span>, 
                            <span class='font-semibold text-purple-600'>Artificial Intelligence</span>, dan 
                            <span class='font-semibold text-indigo-600'>Machine Learning</span>. 
                            Acara ini dikemas secara interaktif dengan studi kasus nyata dan praktik langsung.
                        </p>
                    </div>

                    <!-- Pembicara -->
                    <div>
                        <h3 class='text-2xl font-bold text-gray-900 mb-4 relative pl-4 border-l-4 border-purple-500'>
                            Pembicara
                        </h3>
                        <p class='text-gray-800 text-lg font-medium'>
                            {$speaker}
                        </p>
                        <div class='mt-3 h-px bg-gray-200'></div>
                    </div>

                    <!-- Benefit -->
                    <div>
                        <h3 class='text-2xl font-bold text-gray-900 mb-6 relative pl-4 border-l-4 border-green-500'>
                            Benefit & Keuntungan
                        </h3>

                        <ul class='space-y-3'>
                            <li class='flex items-start gap-3 text-gray-700 text-lg'>
                                <span class='text-green-600 font-bold mt-1'>✓</span>
                                <span>E-Sertifikat resmi</span>
                            </li>
                            <li class='flex items-start gap-3 text-gray-700 text-lg'>
                                <span class='text-green-600 font-bold mt-1'>✓</span>
                                <span>Materi lengkap & recording (untuk webinar)</span>
                            </li>
                            <li class='flex items-start gap-3 text-gray-700 text-lg'>
                                <span class='text-green-600 font-bold mt-1'>✓</span>
                                <span>Networking dengan praktisi industri</span>
                            </li>
                            <li class='flex items-start gap-3 text-gray-700 text-lg'>
                                <span class='text-green-600 font-bold mt-1'>✓</span>
                                <span>Studi kasus dan hands-on project</span>
                            </li>
                            <li class='flex items-start gap-3 text-gray-700 text-lg'>
                                <span class='text-green-600 font-bold mt-1'>✓</span>
                                <span>Kesempatan diskusi langsung dengan mentor</span>
                            </li>
                        </ul>
                    </div>

                </div>
            ";

            Event::create([
                'event_category_id' => $category,
                'name' => $name,
                'description' => $description,
                'date' => $date,
                'location' => $location,
                'register_link' => $registerLink,
                'cover' => null,
            ]);
        }
    }
}
