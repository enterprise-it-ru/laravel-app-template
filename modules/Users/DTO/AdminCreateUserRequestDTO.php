<?php

declare(strict_types=1);

namespace Modules\Users\DTO;

use Spatie\LaravelData\Data;

class AdminCreateUserRequestDTO extends Data
{
    public function __construct(
        public bool $active,
        public string $name,
        public string $email,
        public string $role,
        public string $password,
    ) {
    }
}
