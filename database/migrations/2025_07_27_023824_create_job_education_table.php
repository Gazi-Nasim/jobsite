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
        Schema::create('job_education', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('posted_job_id');
            $table->foreign('posted_job_id')->references('id')->on('posted_jobs')->onDelete('cascade');
            $table->string('secondary');
            $table->string('higherSecondary');
            $table->string('graduation');
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_education');
    }
};
