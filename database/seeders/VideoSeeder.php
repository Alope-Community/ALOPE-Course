<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Video;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $course = Course::whereSlug("html-dasar")->first(); 

        if (!$course) {
            return;
        }

        $videos = [
            [
                'title' => 'Perkenalan HTML',
                'description' => 'Pada video kali ini kita cuman akan mulai berkenalan dengan HTML. Dimulai dari "Apa itu HTML?" sampai "Apa yang kita butuhkan untuk membuat project HTML?".Jadi, buat kalian yang tertarik untuk belajar HTML lebih lanjut, pantengin aja  serie HTML DASAR di channel ALOPE Programming tentunya.',
                "link" => "https://www.youtube.com/embed/1WF50180LOU?si=aM9w6hW-z9gFdFYc"
            ],
            [
                'title' => 'Install Code Editor dan Sedikit Memahami Tag',
                'description' => 'Pada video kali ini kita bakal mulai untuk menginstall code editor. Untuk saat ini kita akan bareng bareng untuk menginstall code editor Sublime Text. Barangkali kalian juga mau ikut ngoding pake code editor sublime text bisa kunjungi link ini untuk ikut bareng bareng sama saya dari awal: Link Sublime Text : sublimetext.com/',
                "link" => "https://www.youtube.com/embed/7KF5ZYIGrbg?si=5FLT_peXfwgdteRD"
            ],
            [
                'title' => 'Basic Template HTML',
                'description' => 'Tentunya basic template HTML ini sangat dibutuhkan. Mungkin secara visual tanpa menggunakan Basic Template pun sama saja hasilnya ketika tidak menggunakan Basic Template itu. Cuman ketika nanti kalian ngikutin, pasti nanti kalian bakal sadar betapa hebatnya Basic Template HTML ini.',
                "link" => "https://www.youtube.com/embed/yR7AME7TyRM?si=rmT0I3fHrFrFfWTV"
            ],
            [
                'title' => 'Heading Pada HTML',
                'description' => 'Tag Heading ini ada 6 macam dengan ukuran font size dan kegunaan yang berbeda-beda. Mari kita kenali setiap heading yang ada pada HTML.',
                "link" => "https://www.youtube.com/embed/RzbBORyi0OI?si=7Yning3CxOGfe2pc"
            ],
            [
                'title' => 'LIST',
                'description' => 'Kali ini kita berkenalan dengan tag baru lagi nih, yaitu tag "ol" dan tag "ol". Kedua tag ini digunakan untuk membuat List pada website kita. Serta kita juga mengenal tag "li" untuk menampilkan list itemnya.',
                "link" => "https://www.youtube.com/embed/v46Cb12j3KM?si=scoGJ9seHZ93-OUf"
            ],
        ];

        $now = Carbon::now();

        foreach ($videos as $index => $video) {
            Video::create([
                'id' => Str::uuid(),
                'title' => $video['title'],
                'slug' => Str::slug($video['title']),
                'description' => $video['description'],
                'link' => $video['link'],
                'course_id' => $course->id,
                "created_at" => $now->copy()->addSeconds($index)
            ]);
        }
    }
}
