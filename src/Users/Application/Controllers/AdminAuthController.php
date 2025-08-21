<?php

declare(strict_types=1);

namespace App\Users\Application\Controllers;

use App\Users\Application\DTO\Request\AdminAuthFormRequestDTO;
use App\Users\Application\DTO\Response\CurrentUserResponseDTO;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthController
{
    public function login(AdminAuthFormRequestDTO $form, Request $request): JsonResponse
    {
        if (Auth::attempt(['email' => $form->email, 'password' => $form->password, 'active' => 1], $form->remember)) {
            $request->session()->regenerate();
            return new JsonResponse(['id' => Auth::user()->id]);
        } else {
            return new JsonResponse(['message' => __('auth.failed')], 401);
        }
    }

    public function getCurrentAuth(): CurrentUserResponseDTO | array
    {
        $user = Auth::user();
        if ($user) {
            return new CurrentUserResponseDTO(
                $user->id,
                $user->name,
                $user->email,
                $user->role === 'admin',
            );
        }
        return ['id' => null];
    }

    public function logout(): array
    {
        Auth::logout();
        return ['success' => true];
    }
}
