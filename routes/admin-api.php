<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Users\Controllers\AdminAuthController;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AdminAuthController::class, 'login'])->name('admin-auth.login');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin-auth.logout');
    Route::get('/check-auth', [AdminAuthController::class, 'getCurrentAuth'])->name('admin-auth.currentAuth');
});
