<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::insert([
            [
                "id" => Str::uuid(),
                "name" => "Web Programming",
                "slug" => "web-programming",
                "description" => "Category khusus course Web Programming.",
            ],
            [
                "id" => Str::uuid(),
                "name" => "Mobile Programming",
                "slug" => "mobile-programming",
                "description" => "Category khusus course Mobile Programming.",
            ],
        ]);
    }
}
