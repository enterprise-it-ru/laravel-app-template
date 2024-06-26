<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Users\Controllers\AuthController;

Route::prefix('admin-api/v1')->group(base_path('routes/admin-api.php'));

Route::group(['prefix' => 'api'], function () {
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::get('/checkAuth', [AuthController::class, 'getCurrentAuth'])->name('auth.currentAuth');

    // For authorized users
    Route::group(['middleware' => 'auth'], function () {
        // Роуты для авторизованных
    });
});

Route::get('/admin{any}', fn() => view('admin_spa'))
    ->where('any', '.*')
    ->name('admin.spa');

Route::get('/{any}', fn() => view('spa'))
    ->where('any', '.*')
    ->name('spa');
