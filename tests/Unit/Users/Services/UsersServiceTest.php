<?php

declare(strict_types=1);

namespace Tests\Unit\Users\Services;

use App\Users\Application\DTO\Request\AdminCreateUserRequestDTO;
use App\Users\Application\DTO\Request\AdminUpdateUserRequestDTO;
use App\Users\Application\Services\UsersService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class UsersServiceTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateAndUpdateUser(): void
    {
        $userService = new UsersService();
        $userDTO = new AdminCreateUserRequestDTO(
            true,
            'UserName',
            'user-email@example.com',
            'admin',
            'password'
        );
        $createdUser = $userService->create($userDTO);

        $this->assertTrue($createdUser->active);
        $this->assertEquals('UserName', $createdUser->name);
        $this->assertEquals('user-email@example.com', $createdUser->email);
        $this->assertEquals('admin', $createdUser->role);
        $this->assertNotEmpty($createdUser->password);


        $updateRequest = new AdminUpdateUserRequestDTO(
            $createdUser->id,
            false,
            'UpdateUserName',
            'updated-user-email@example.com',
            'user',
            Hash::make('password2')
        );

        $updatedUser = $userService->update($updateRequest);

        $this->assertFalse($updatedUser->active);
        $this->assertEquals('UpdateUserName', $updatedUser->name);
        $this->assertEquals('updated-user-email@example.com', $updatedUser->email);
        $this->assertEquals('user', $updatedUser->role);
        $this->assertNotEmpty($updatedUser->password);
    }
}
