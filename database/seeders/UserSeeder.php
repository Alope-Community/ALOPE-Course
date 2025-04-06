<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            [
                "name" => "Admin",
                "email" => "admin@gmail.com",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Ilham Hafidz",
                "email" => "ilham@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Taufan Hidayatul Akbar",
                "email" => "taufan@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Firdan Fauzan",
                "email" => "firdan@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Fikry",
                "email" => "fikry@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Billy Jonathan",
                "email" => "billy@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Dikri Fauzan A",
                "email" => "dikri@alope.id",
                "password" => bcrypt("password")
            ],
            [
                "name" => "Masnun Muhaemin",
                "email" => "masnun@alope.id",
                "password" => bcrypt("password")
            ]
        ]);
    }
}
