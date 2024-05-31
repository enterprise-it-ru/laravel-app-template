<?php

declare(strict_types=1);

namespace Modules\Users\Services;

use Modules\Users\DTO\AdminUserListItemDTO;
use Modules\Users\Models\User;

class UsersService
{
    public function getUserListWithPagination(): array
    {
        $users = User::query()->paginate();

        $users->through(fn($item) => new AdminUserListItemDTO(
            $item->id,
            $item->name,
            true,
            $item->email,
            'admin',
            $item->created_at->format('Y-m-d H:i:s'),
            $item->updated_at->format('Y-m-d H:i:s'),
            '',
            ''
        ));

        return $users->toArray();
    }
}
