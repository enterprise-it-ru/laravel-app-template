<?php

declare(strict_types=1);

namespace Modules\Users\Services;

use Illuminate\Database\Eloquent\Builder;
use Modules\Users\DTO\AdminUserListFilterRequestDTO;
use Modules\Users\DTO\AdminUserListItemDTO;
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
}
