<?php

declare(strict_types=1);

namespace Modules\Users\DTO\Request;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Unique;
use Spatie\LaravelData\Data;

class AdminCreateUserRequestDTO extends Data
{
    public function __construct(
        public bool $active,
        #[Max(255)]
        public string $name,
        #[Email]
        #[Max(255)]
        #[Unique('users', 'email')]
        public string $email,
        public string $role,
        public string $password,
    ) {
    }
}
