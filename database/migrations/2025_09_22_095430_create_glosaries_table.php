<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('glosaries', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title'); // istilah, misalnya "API"
            $table->string('slug')->unique(); // url-friendly, misalnya "api"
            $table->string('short_definition'); // definisi singkat (tooltip)
            $table->longText('long_definition')->nullable(); // penjelasan panjang
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('glosaries');
    }
};
