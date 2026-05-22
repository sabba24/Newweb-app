<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class DemoUsersSeeder extends Seeder
{
    public function run(): void
    {
        $creds = [];

        $records = [
            ['Admin User', 'admin@example.com', 'password', 'admin', 'admin', null],
            ['Personal Free', 'personal.free@example.com', 'password', 'user', 'personal_free', 'personal_free'],
            ['Personal Pro', 'personal.pro@example.com', 'password', 'user', 'personal_pro', 'personal_pro_monthly'],
            ['Business', 'business@example.com', 'password', 'user', 'business', 'business_starter'],
            ['Police / Agency', 'agency@example.com', 'password', 'police', 'agency', 'agency_monthly'],
        ];

        foreach ($records as [$name, $email, $pwd, $role, $type, $plan]) {
            User::updateOrCreate(
                ['email' => $email],
                [
                    'name' => $name,
                    'password' => Hash::make($pwd),
                    'role' => $role,
                    'account_type' => $type,
                    'selected_plan' => $plan,
                ]
            );

            $creds[] = sprintf('%s: %s / %s', $name, $email, $pwd);
        }

        $content = "Demo credentials (use any of the following):\n" . implode("\n", $creds) . "\n";
        Storage::disk('local')->put('demo-credentials.txt', $content);
    }
}
