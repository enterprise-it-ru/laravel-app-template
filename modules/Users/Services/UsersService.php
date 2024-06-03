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
                return $query->where('name', 'like', '%' . $filter->query . '%')
                    ->orWhere('email', 'like', '%' . $filter->query . '%');
            })
            ->when($filter->active, function (Builder $query) use ($filter) {
                // TODO: add active
            })
            ->when($filter->role, function (Builder $query) use ($filter) {
                // TODO: add role
            })
            ->paginate();

        $users->through(fn(User $item) => new AdminUserListItemDTO(
            $item->id,
            $item->name,
            true,
            $item->email,
            'admin',
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
                'email'    => $createUserRequestDTO->email,
                'password' => Hash::make($createUserRequestDTO->password),
            ]
        );
    }

    public function update(AdminUpdateUserRequestDTO $requestDTO): User
    {
        $user = User::query()->findOrFail($requestDTO->id);

        $user->name = $requestDTO->name;
        $user->email = $requestDTO->email;
        if ($requestDTO->password) {
            $user->password = Hash::make($requestDTO->password);
        }
        $user->save();

        return $user;
    }
}
