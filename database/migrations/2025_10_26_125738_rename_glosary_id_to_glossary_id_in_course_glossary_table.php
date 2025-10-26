<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Pastikan kolom lama masih ada
        if (Schema::hasColumn('course_glossary', 'glosary_id')) {

            // Coba hapus foreign key lama (jika masih ada)
            try {
                DB::statement('ALTER TABLE course_glossary DROP FOREIGN KEY course_glossary_glosary_id_foreign');
            } catch (\Throwable $e) {
                // Abaikan jika FK tidak ada
            }

            // Hapus unique lama (jika ada)
            try {
                DB::statement('ALTER TABLE course_glossary DROP INDEX course_glossary_course_id_glosary_id_unique');
            } catch (\Throwable $e) {
                // Abaikan jika index tidak ada
            }

            // Rename kolom
            Schema::table('course_glossary', function (Blueprint $table) {
                $table->renameColumn('glosary_id', 'glossary_id');
            });

            // Tambahkan kembali foreign key dan unique constraint baru
            Schema::table('course_glossary', function (Blueprint $table) {
                $table->foreign('glossary_id')
                    ->references('id')
                    ->on('glossaries')
                    ->onDelete('cascade');

                $table->unique(['course_id', 'glossary_id']);
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('course_glossary', 'glossary_id')) {
            Schema::table('course_glossary', function (Blueprint $table) {
                $table->dropForeign(['glossary_id']);
                $table->dropUnique(['course_id', 'glossary_id']);
                $table->renameColumn('glossary_id', 'glosary_id');
            });

            Schema::table('course_glossary', function (Blueprint $table) {
                $table->foreign('glosary_id')
                    ->references('id')
                    ->on('glosaries')
                    ->onDelete('cascade');

                $table->unique(['course_id', 'glosary_id']);
            });
        }
    }
};
