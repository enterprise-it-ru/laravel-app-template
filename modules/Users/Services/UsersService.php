<?php

declare(strict_types=1);

namespace Modules\Users\Services;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Hash;
use Modules\Users\DTO\Request\AdminCreateUserRequestDTO;
use Modules\Users\DTO\Request\AdminUpdateUserRequestDTO;
use Modules\Users\DTO\Request\AdminUserListFilterRequestDTO;
use Modules\Users\DTO\Response\AdminUserListItemDTO;
use Modules\Users\Models\User;

class UsersService
{
    public function getUserListWithPagination(AdminUserListFilterRequestDTO $filter): array
    {
        $users = User::query()
            ->when($filter->query, function (Builder $query) use ($filter) {
                $query->where(function (Builder $query) use ($filter) {
                    $query->where('name', 'like', '%' . $filter->query . '%')
                        ->orWhere('email', 'like', '%' . $filter->query . '%')
                        ->orWhere('id', '=', $filter->query);
                });
            })
            ->when($filter->active === true, function (Builder $query) {
                $query->where('active', '=', 1);
            })
            ->when($filter->active === false, function (Builder $query) {
                $query->where('active', '=', 0)->orWhereNull('active');
            })
            ->when($filter->role, function (Builder $query) use ($filter) {
                $query->where('role', '=', $filter->role);
            })
            ->with(['updatedBy', 'createdBy'])
            ->paginate();

        $users->through(fn(User $item) => new AdminUserListItemDTO(
            $item->id,
            $item->name,
            (bool) $item->active,
            $item->email,
            $item->role_name,
            $item->created_at->format('Y-m-d H:i:s'),
            $item->updated_at->format('Y-m-d H:i:s'),
            $item->createdBy ? $item->createdBy->name : null,
            $item->updatedBy ? $item->updatedBy->name : null
        ));

        return $users->toArray();
    }

    public function create(AdminCreateUserRequestDTO $createUserRequestDTO): User
    {
        return User::query()->create(
            [
                'name'     => $createUserRequestDTO->name,
                'role'     => $createUserRequestDTO->role,
                'email'    => $createUserRequestDTO->email,
                'password' => Hash::make($createUserRequestDTO->password),
                'active'   => $createUserRequestDTO->active,
            ]
        );
    }

    public function update(AdminUpdateUserRequestDTO $requestDTO): User
    {
        $user = User::query()->findOrFail($requestDTO->id);

        $user->active = $requestDTO->active;
        $user->role = $requestDTO->role;
        $user->name = $requestDTO->name;
        $user->email = $requestDTO->email;
        if ($requestDTO->password) {
            $user->password = Hash::make($requestDTO->password);
        }
        $user->save();

        return $user;
    }
}
