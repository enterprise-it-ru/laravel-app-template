<?php

declare(strict_types=1);

namespace Modules\Users\DTO;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Data;

class AdminCreateUserRequestDTO extends Data
{
    public function __construct(
        public bool $active,
        #[Max(200)]
        public string $name,
        #[Email]
        #[Max(200)]
        public string $email,
        public string $role,
        public string $password,
    ) {
    }
}
