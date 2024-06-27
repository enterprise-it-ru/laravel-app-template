<?php

declare(strict_types=1);

namespace Tests\Feature\Users;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\Users\Models\User;
use PHPUnit\Framework\Attributes\TestWith;
use Tests\TestCase;

class AdminUsersTest extends TestCase
{
    use RefreshDatabase;

    #[TestWith(['admin.users.index'], 'index')]
    #[TestWith(['admin.users.list-filters'], 'list-filters')]
    #[TestWith(['admin.users.create', 'POST'], 'create')]
    #[TestWith(['admin.users.update', 'POST'], 'update')]
    #[TestWith(['admin.users.edit-user-form', 'GET', ['id' => 1]], 'edit-user-form')]
    #[TestWith(['admin.users.get-form-params'], 'get-form-params')]
    #[TestWith(['admin.users.delete', 'POST', ['id' => 1]], 'delete')]
    public function testAccessToPages(string $routeName, string $method = 'GET', array $params = []): void
    {
        if ($method === 'GET') {
            $response = $this->get(route($routeName, $params));
            $response->assertRedirect('/');
        } elseif ($method === 'POST') {
            $response = $this->post(route($routeName, $params));
            $response->assertRedirect('/');
        }
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
