<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Modules\Users\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        User::factory()->create(
            [
                'name'     => 'admin',
                'email'    => 'admin@admin.com',
                'password' => Hash::make('password'),
                'active'   => true,
                'role'     => 'admin',
            ]
        );
    }
}
