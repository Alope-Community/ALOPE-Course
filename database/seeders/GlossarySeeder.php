<?php

namespace Database\Seeders;

use App\Models\Glossary;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GlossarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'API',
                'slug' => 'api',
                'short_definition' => 'Antarmuka untuk komunikasi antar aplikasi.',
                'long_definition' => 'API (Application Programming Interface) adalah sekumpulan aturan dan protokol yang memungkinkan aplikasi berbeda berkomunikasi satu sama lain.'
            ],
            [
                'title' => 'Framework',
                'slug' => 'framework',
                'short_definition' => 'Kerangka kerja untuk pengembangan aplikasi.',
                'long_definition' => 'Framework adalah kumpulan library, aturan, dan struktur yang memudahkan developer dalam membangun aplikasi dengan pola tertentu.'
            ],
            [
                'title' => 'Laravel',
                'slug' => 'laravel',
                'short_definition' => 'Framework PHP populer.',
                'long_definition' => 'Laravel adalah framework PHP open-source dengan sintaks elegan, menyediakan fitur seperti routing, ORM, queue, event, dan lainnya.'
            ],
            [
                'title' => 'Database',
                'slug' => 'database',
                'short_definition' => 'Sistem untuk menyimpan dan mengelola data.',
                'long_definition' => 'Database adalah kumpulan data yang terorganisir, dikelola dengan DBMS seperti MySQL, PostgreSQL, atau MongoDB.'
            ],
        ];

        foreach ($data as $item) {
            Glossary::create($item);
        }
    }
}
