<?php

declare(strict_types=1);

namespace Modules\Users\Controllers;

use Modules\Users\Services\UsersService;

class AdminUsersController
{
    public function index(UsersService $usersService): array
    {
        // TODO: Add filter
        return $usersService->getUserListWithPagination();
    }

    public function listFilters(): array
    {
        return [
            'active' => [
                [
                    'id'   => true,
                    'name' => 'Активен',
                ],
                [
                    'id'   => false,
                    'name' => 'Заблокирован',
                ],
            ],
            'roles'  => [
                [
                    'id'   => 'admin',
                    'name' => 'Администратор',
                ],
                [
                    'id'   => 'user',
                    'name' => 'Пользователь',
                ],
            ],
        ];
    }
}
