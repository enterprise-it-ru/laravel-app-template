<?php

declare(strict_types=1);

namespace Modules\Users\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Users\DTO\Request\AdminAuthFormRequestDTO;

class AdminAuthController
{
    public function login(AdminAuthFormRequestDTO $form, Request $request): JsonResponse
    {
        if (Auth::attempt(['email' => $form->email, 'password' => $form->password], $form->remember)) {
            $request->session()->regenerate();
            return new JsonResponse(['id' => Auth::user()->id]);
        } else {
            return new JsonResponse(['message' => __('auth.failed')], 401);
        }
    }

    public function getCurrentAuth(): array
    {
        $user = Auth::user();
        if ($user) {
            return ['id' => $user->id, 'name' => $user->name, 'email' => $user->email];
        }
        return ['id' => null];
    }

    public function logout(): array
    {
        Auth::logout();
        return ['success' => true];
    }
}
