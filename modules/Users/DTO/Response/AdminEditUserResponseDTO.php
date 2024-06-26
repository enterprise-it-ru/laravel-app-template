<?php

declare(strict_types=1);

namespace Modules\Users\DTO\Response;

use Spatie\LaravelData\Data;

class AdminEditUserResponseDTO extends Data
{
    public function __construct(
        public int $id,
        public bool $active,
        public string $name,
        public string $email,
        public string $role
    ) {
    }
}
