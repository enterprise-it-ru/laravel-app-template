<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full bg-gray-50">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    {{ Vite::useBuildDirectory('build-admin')->withEntryPoints(['resources/admin/app.ts']) }}
</head>
<body class="h-full">
<div id="app">
    @yield('content')
</div>
</body>
</html>
