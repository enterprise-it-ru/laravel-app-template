<?php

declare(strict_types=1);

namespace Modules\Users\DTO\Request;

use Spatie\LaravelData\Data;

class AdminAuthFormRequestDTO extends Data
{
    public function __construct(
        public string $email,
        public string $password,
        public bool $remember,
    ) {
    }
}
