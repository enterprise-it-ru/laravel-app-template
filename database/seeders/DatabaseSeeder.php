<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Users\Domain\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        // Создаем админа
        User::factory()->create(
            [
                'name'     => 'admin',
                'email'    => 'admin@admin.com',
                'password' => Hash::make('password'),
                'active'   => true,
                'role'     => 'admin',
            ]
        );

        // И дополнительных пользователей
        User::factory()->count(50)->create();
    }
}
