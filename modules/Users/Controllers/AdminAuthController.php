<?php

declare(strict_types=1);

namespace Modules\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Modules\Users\DTO\AdminAuthFormRequestDTO;

class AdminAuthController
{
    public function login(AdminAuthFormRequestDTO $form, Request $request): \Illuminate\Http\Response | array
    {
        if (Auth::attempt(['email' => $form->email, 'password' => $form->password], $form->remember)) {
            $request->session()->regenerate();
            return ['id' => Auth::user()->id];
        } else {
            return Response::make(['message' => __('auth.failed')], 401);
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
}
