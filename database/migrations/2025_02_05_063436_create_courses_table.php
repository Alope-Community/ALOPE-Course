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
        Schema::create('courses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string("title");
            $table->string("slug");
            $table->text("description");
            $table->string("cover");
            $table->enum("visibility", ["public", "private"]);

            $table->uuid('category_id')->nullable();
            $table->foreign("category_id")->references("id")->on("categories")->onDelete("set null");

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
