<?php

declare(strict_types=1);

namespace Tests\Feature\Users;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\Users\Models\User;
use Tests\TestCase;

class AdminUsersTest extends TestCase
{
    use RefreshDatabase;

    public function testAccessToPages(): void
    {
        $response = $this->get(route('admin.users.index'));
        $response->assertRedirect('/');
    }

    public function testIndexPage(): void
    {
        $user = User::query()->find(1);
        $this->actingAs($user, 'web');
        $response = $this->get(route('admin.users.index'));

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'data' => [
                        '*' => [
                            'id',
                            'name',
                            'active',
                            'email',
                            'role',
                            'createdAt',
                            'updatedAt',
                            'createdBy',
                            'updatedBy',
                        ],
                    ],
                    'current_page',
                    'last_page',
                    'total',
                    'per_page',
                ]
            );
    }
}
