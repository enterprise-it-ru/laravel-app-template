<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Users\Controllers\AdminAuthController;
use Modules\Users\Controllers\AdminUsersController;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AdminAuthController::class, 'login'])->name('admin-auth.login');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin-auth.logout');
    Route::get('/check-auth', [AdminAuthController::class, 'getCurrentAuth'])->name('admin-auth.currentAuth');
});

Route::group(['prefix' => 'users'], function () {
    Route::get('/', [AdminUsersController::class, 'index'])->name('admin-auth.users.index');
    Route::get('/list-filters', [AdminUsersController::class, 'listFilters'])->name('admin-auth.users.list-filters');
});
