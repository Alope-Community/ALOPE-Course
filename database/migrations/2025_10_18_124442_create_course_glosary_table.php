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
        Schema::create('course_glosary', function (Blueprint $table) {
           $table->uuid("course_id");
            $table->uuid("glosary_id");

            $table->foreign("course_id")->references("id")->on("courses")->onDelete("cascade");
            $table->foreign("glosary_id")->references("id")->on("glosaries")->onDelete("cascade");

            $table->unique(['course_id', 'glosary_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_glosary');
    }
};
