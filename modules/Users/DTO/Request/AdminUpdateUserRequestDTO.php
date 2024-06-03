<?php

declare(strict_types=1);

namespace Modules\Users\DTO\Request;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Support\Validation\ValidationContext;

class AdminUpdateUserRequestDTO extends Data
{
    public function __construct(
        public int $id,
        public bool $active,
        public string $name,
        public string $email,
        public string $role,
        public ?string $password,
    ) {
    }

    public static function rules(ValidationContext $context): array
    {
        return [
            'name'  => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($context->payload['id']),
            ],
            'role'  => ['required', 'string'],
        ];
    }
}
