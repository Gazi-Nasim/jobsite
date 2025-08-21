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
        Schema::create('posted_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('company');
            $table->string('location');
            $table->string('salary');
            $table->string('min_experience')->nullable();
            $table->string('max_experience')->nullable();
            $table->string('min_age')->nullable();
            $table->string('max_age')->nullable();
            $table->string('posted')->nullable();
            $table->string('deadline')->nullable();
            $table->string('imp_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posted_jobs');
    }
};
