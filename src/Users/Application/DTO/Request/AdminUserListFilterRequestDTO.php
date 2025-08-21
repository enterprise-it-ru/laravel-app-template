<?php

declare(strict_types=1);

namespace App\Users\Application\DTO\Request;

use Spatie\LaravelData\Data;

class AdminUserListFilterRequestDTO extends Data
{
    public function __construct(
        public ?string $query,
        public ?bool $active,
        public ?string $role,
    ) {
    }
}
