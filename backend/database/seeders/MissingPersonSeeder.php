<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MissingPerson;

class MissingPersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $people = [
            [
                'name' => 'Aaliyah Brown',
                'age' => 14,
                'last_seen_location' => 'Kingston',
                'date_missing' => now()->subDays(3)->toDateString(),
                'photo_url' => null,
                'status' => 'missing',
                'description' => 'Last seen near Half-Way-Tree Mall wearing a green top.',
            ],
            [
                'name' => 'Dwayne Campbell',
                'age' => 28,
                'last_seen_location' => 'Montego Bay',
                'date_missing' => now()->subWeek()->toDateString(),
                'photo_url' => null,
                'status' => 'missing',
                'description' => 'Family is seeking any information regarding whereabouts.',
            ],
            [
                'name' => 'Shanice Johnson',
                'age' => 22,
                'last_seen_location' => 'Portmore',
                'date_missing' => now()->subDays(10)->toDateString(),
                'photo_url' => null,
                'status' => 'missing',
                'description' => 'Reported missing after not returning from work.',
            ],
        ];

        foreach ($people as $p) {
            MissingPerson::create($p);
        }
    }
}
