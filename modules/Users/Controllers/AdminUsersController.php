<?php

declare(strict_types=1);

namespace Modules\Users\Controllers;

use Modules\Users\DTO\AdminCreateUserRequestDTO;
use Modules\Users\DTO\AdminUserListFilterRequestDTO;
use Modules\Users\Services\UsersService;

class AdminUsersController
{
    public function index(UsersService $usersService, AdminUserListFilterRequestDTO $filter): array
    {
        return $usersService->getUserListWithPagination($filter);
    }

    public function listFilters(): array
    {
        return [
            'active' => [
                [
                    'id'   => 1,
                    'name' => 'Активен',
                ],
                [
                    'id'   => 0,
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

    public function create(AdminCreateUserRequestDTO $createUserRequestDTO)
    {
        dd($createUserRequestDTO);
        return [];
    }
}
