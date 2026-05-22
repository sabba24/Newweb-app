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
        Schema::table('missing_people', function (Blueprint $table) {
            $table->date('date_of_birth')->nullable()->after('name');
            $table->string('gender')->nullable()->after('age');
            $table->string('parish')->nullable()->after('gender');
            $table->dateTime('last_seen_at')->nullable()->after('last_seen_location');
            $table->text('clothing_last_worn')->nullable()->after('date_missing');
            $table->text('physical_description')->nullable()->after('clothing_last_worn');
            $table->text('medical_conditions')->nullable()->after('physical_description');
            $table->string('contact_person_name')->nullable()->after('medical_conditions');
            $table->string('contact_phone')->nullable()->after('contact_person_name');
            $table->string('relationship')->nullable()->after('contact_phone');
            $table->string('reward_amount')->nullable()->after('relationship');
            $table->json('additional_photos')->nullable()->after('photo_url');
            $table->string('video_url')->nullable()->after('additional_photos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('missing_people', function (Blueprint $table) {
            $table->dropColumn([
                'date_of_birth',
                'gender',
                'parish',
                'last_seen_at',
                'clothing_last_worn',
                'physical_description',
                'medical_conditions',
                'contact_person_name',
                'contact_phone',
                'relationship',
                'reward_amount',
                'additional_photos',
                'video_url',
            ]);
        });
    }
};