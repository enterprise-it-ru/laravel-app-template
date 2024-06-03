<?php

declare(strict_types=1);

namespace Modules\Users\Controllers;

use Modules\Users\DTO\Request\AdminCreateUserRequestDTO;
use Modules\Users\DTO\Request\AdminUpdateUserRequestDTO;
use Modules\Users\DTO\Request\AdminUserListFilterRequestDTO;
use Modules\Users\DTO\Response\AdminEditUserResponseDTO;
use Modules\Users\Models\User;
use Modules\Users\Services\UsersService;

class AdminUsersController
{
    public function index(UsersService $usersService, AdminUserListFilterRequestDTO $filter): array
    {
        return $usersService->getUserListWithPagination($filter);
    }

    public function listFilters(): array
    {
        $roles = [];
        $rolesConfig = config('roles.roles_list', []);
        foreach ($rolesConfig as $key => $item) {
            $roles[] = ['id' => $key, 'name' => $item];
        }

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
            'roles'  => $roles,
        ];
    }

    public function create(AdminCreateUserRequestDTO $createUserRequestDTO, UsersService $usersService): array
    {
        $createdUser = $usersService->create($createUserRequestDTO);
        return ['success' => true, 'id' => $createdUser->id];
    }

    public function update(AdminUpdateUserRequestDTO $requestDTO, UsersService $usersService): array
    {
        $createdUser = $usersService->update($requestDTO);
        return ['success' => true, 'id' => $createdUser->id];
    }

    public function editUserFormData(int $id): AdminEditUserResponseDTO
    {
        $user = User::query()->findOrFail($id);
        return new AdminEditUserResponseDTO(
            $user->id,
            (bool) $user->active,
            $user->name,
            $user->email,
            (string) $user->role
        );
    }

    public function getFormParams(): array
    {
        $roles = [];
        $rolesConfig = config('roles.roles_list', []);
        foreach ($rolesConfig as $key => $item) {
            $roles[] = ['id' => $key, 'name' => $item];
        }
        return [
            'roles' => $roles,
        ];
    }

    public function delete(int $id): array
    {
        $user = User::query()->findOrFail($id);
        $user->delete();
        return ['success' => true];
    }
}
