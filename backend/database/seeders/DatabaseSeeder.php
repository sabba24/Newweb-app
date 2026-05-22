<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Ensure storage path exists
        Storage::disk('local')->makeDirectory('/');

        $creds = [];

        // Admin
        $admin = User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'account_type' => 'admin',
                'selected_plan' => null,
            ]
        );
        $creds[] = "Admin: admin@example.com / password";

        // Personal Free
        $pf = User::updateOrCreate(
            ['email' => 'personal.free@example.com'],
            [
                'name' => 'Personal Free',
                'password' => Hash::make('password'),
                'role' => 'user',
                'account_type' => 'personal_free',
                'selected_plan' => 'personal_free',
            ]
        );
        $creds[] = "Personal Free: personal.free@example.com / password";

        // Personal Pro
        $pp = User::updateOrCreate(
            ['email' => 'personal.pro@example.com'],
            [
                'name' => 'Personal Pro',
                'password' => Hash::make('password'),
                'role' => 'user',
                'account_type' => 'personal_pro',
                'selected_plan' => 'personal_pro_monthly',
            ]
        );
        $creds[] = "Personal Pro: personal.pro@example.com / password";

        // Business
        $biz = User::updateOrCreate(
            ['email' => 'business@example.com'],
            [
                'name' => 'Business',
                'password' => Hash::make('password'),
                'role' => 'user',
                'account_type' => 'business',
                'selected_plan' => 'business_starter',
            ]
        );
        $creds[] = "Business: business@example.com / password";

        // Police / Agency
        $agency = User::updateOrCreate(
            ['email' => 'agency@example.com'],
            [
                'name' => 'Police / Agency',
                'password' => Hash::make('password'),
                'role' => 'police',
                'account_type' => 'agency',
                'selected_plan' => 'agency_monthly',
            ]
        );
        $creds[] = "Police/Agency: agency@example.com / password";

        // Default test user (kept)
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            DemoUsersSeeder::class,
            MissingPersonSeeder::class,
            AlertSeeder::class,
        ]);

        // Save demo credentials
        $content = "Demo credentials (use any of the following):\n" . implode("\n", $creds) . "\n";
        Storage::disk('local')->put('demo-credentials.txt', $content);
    }
}
