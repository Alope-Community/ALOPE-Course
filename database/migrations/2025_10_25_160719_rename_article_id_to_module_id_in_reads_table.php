<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('reads', function (Blueprint $table) {
            $table->dropForeign(['article_id']);
            $table->renameColumn('article_id', 'module_id');
        });

        Schema::table('reads', function (Blueprint $table) {
            $table->foreign('module_id')->references('id')->on('modules')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('reads', function (Blueprint $table) {
            $table->dropForeign(['module_id']);
            $table->renameColumn('module_id', 'article_id');
        });

        Schema::table('reads', function (Blueprint $table) {
            $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
        });
    }
};
