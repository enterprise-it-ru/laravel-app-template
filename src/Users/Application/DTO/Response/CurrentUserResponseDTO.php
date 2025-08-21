<?php

declare(strict_types=1);

namespace App\Users\Application\DTO\Response;

use Spatie\LaravelData\Data;

class CurrentUserResponseDTO extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public bool $isAdmin,
    ) {
    }
}
