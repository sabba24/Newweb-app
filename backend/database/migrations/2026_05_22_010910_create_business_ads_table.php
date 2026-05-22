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
        Schema::create('business_ads', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->string('ad_title');
            $table->text('promo_description');
            $table->string('discount_amount')->nullable();
            $table->string('website_url');
            $table->string('call_phone');
            $table->string('location');
            $table->string('cta_type');
            $table->string('image_url')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->string('budget')->nullable();
            $table->string('status')->default('submitted_for_review_payment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_ads');
    }
};