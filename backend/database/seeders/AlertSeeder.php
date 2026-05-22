<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Alert;

class AlertSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $alerts = [
            [
                'title' => 'Severe Weather Warning',
                'message' => 'Heavy rains expected across eastern parishes. Stay alert.',
                'severity' => 'warning',
            ],
            [
                'title' => 'Amber Alert',
                'message' => 'Missing child reported in St. Catherine. Call 119 with info.',
                'severity' => 'critical',
            ],
            [
                'title' => 'Traffic Advisory',
                'message' => 'Accident on North-South Highway causing delays. Seek alternate routes.',
                'severity' => 'info',
            ],
        ];

        foreach ($alerts as $a) {
            Alert::create($a);
        }
    }
}
