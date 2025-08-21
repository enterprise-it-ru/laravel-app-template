<?php

declare(strict_types=1);

use App\Users\Application\Controllers\AdminAuthController;
use App\Users\Application\Controllers\AdminUsersController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AdminAuthController::class, 'login'])->name('admin-auth.login');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->middleware('auth:web')->name('admin-auth.logout');
    Route::get('/check-auth', [AdminAuthController::class, 'getCurrentAuth'])->name('admin-auth.currentAuth');
});

Route::group(['prefix' => 'users', 'middleware' => ['auth:web', 'can:is-admin']], function () {
    Route::get('/', [AdminUsersController::class, 'index'])->name('admin.users.index');
    Route::get('/list-filters', [AdminUsersController::class, 'listFilters'])->name('admin.users.list-filters');
    Route::post('/create', [AdminUsersController::class, 'create'])->name('admin.users.create');
    Route::post('/update', [AdminUsersController::class, 'update'])->name('admin.users.update');
    Route::get('/get-user-form/{id}', [AdminUsersController::class, 'editUserFormData'])->name('admin.users.edit-user-form');
    Route::get('/get-form-params', [AdminUsersController::class, 'getFormParams'])->name('admin.users.get-form-params');
    Route::post('/delete/{id}', [AdminUsersController::class, 'delete'])->name('admin.users.delete');
});
