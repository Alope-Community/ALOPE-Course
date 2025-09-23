<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GlossarySeeder extends Seeder
{
    public function run(): void
    {
        // kosongkan dulu (opsional, hapus jika tidak mau truncate)
        DB::table('glosaries')->truncate();

        $items = [
            [
                'title' => 'CSS',
                'slug' => 'css',
                'description' => 'Bahasa untuk mendesain tampilan web.',
                'body' => "CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan untuk mengontrol tampilan elemen HTML di halaman web. 
                Dengan CSS, pengembang dapat mengatur warna, ukuran font, spasi, posisi elemen, hingga membuat layout yang responsif. 
                Seiring perkembangan web modern, CSS juga mendukung fitur seperti animasi, grid system, dan variabel, sehingga memungkinkan desain yang konsisten dan fleksibel."
            ],
            [
                'title' => 'HTML',
                'slug' => 'html',
                'description' => 'Bahasa markup untuk struktur web.',
                'body' => "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membangun struktur konten di web. 
                HTML menyusun teks, gambar, tautan, tabel, formulir, hingga media interaktif dengan menggunakan elemen (tag). 
                Versi terbaru, HTML5, menambahkan dukungan untuk video, audio, grafik vektor (SVG), serta semantic tags yang meningkatkan aksesibilitas dan SEO."
            ],
            [
                'title' => 'Machine Learning',
                'slug' => 'machine-learning',
                'description' => 'Cabang AI untuk pembelajaran mesin.',
                'body' => "Machine Learning adalah sub-bidang kecerdasan buatan (AI) yang berfokus pada pengembangan algoritma dan model yang mampu \"belajar\" dari data. 
                Alih-alih diprogram secara eksplisit, sistem ML meningkatkan performa dengan pengalaman. 
                Contohnya mencakup pengenalan wajah, rekomendasi produk, analisis sentimen, dan prediksi cuaca. 
                Pendekatan populer dalam ML meliputi supervised learning, unsupervised learning, dan reinforcement learning."
            ],
            [
                'title' => 'PBK',
                'slug' => 'pbk',
                'description' => 'Pembelajaran Berbasis Kompetensi.',
                'body' => "PBK (Pembelajaran Berbasis Kompetensi) adalah pendekatan pendidikan yang menekankan pencapaian kompetensi spesifik oleh peserta didik, 
                bukan hanya penyelesaian materi atau jam belajar. 
                Dalam PBK, keberhasilan diukur dari sejauh mana siswa mampu mendemonstrasikan keterampilan, pengetahuan, dan sikap yang relevan dengan tujuan pembelajaran. 
                Pendekatan ini sering digunakan dalam pendidikan vokasi, pelatihan profesional, dan kurikulum berbasis capaian."
            ],
        ];

        foreach ($items as $item) {
            DB::table('glosaries')->insert([
                'id' => (string) Str::uuid(),
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
