<?php

declare(strict_types=1);

namespace Modules\Users\DTO\Response;

use Spatie\LaravelData\Data;

class AdminUserListItemDTO extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public bool $active,
        public string $email,
        public string $role,
        public ?string $createdAt,
        public ?string $updatedAt,
        public ?string $createdBy,
        public ?string $updatedBy,
    ) {
    }
}
