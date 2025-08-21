<?php

declare(strict_types=1);

use App\Users\Infrastructure\Middlewares\CheckBannedMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web:      __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health:   '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->redirectGuestsTo('/');
        $middleware->web(CheckBannedMiddleware::class);
        $middleware->trustProxies(at: ['127.0.0.1', '192.168.65.1/16']);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
