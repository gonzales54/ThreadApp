<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class UserTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->get('/user/userdetail');
        $response = $this->actingAs($user)->get('/user/createthread');
        $response->assertStatus(200);
    }

    public function testUserLogin()
    {
        $user = factory(User::class)->create();
        $response = $this->get('/login');
        $response = $this->actingAs($user)->get('/');
        $response->assertStatus(200);
    }

    public function testUserCreate()
    {
        $response = $this->get('/register');
        $user = factory(User::class)->create();
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

    public function testUserUpdate()
    {
        $user = factory(User::class)->create();
        $response = $this->get('/user/userupdate');
        $response->assertStatus(200);

        $profile_image = UploadedFile::fake()->image('profile2.png');
        $profile_path = $profile_image->storeAs('public/images', $profile_image->getClientOriginalName());
        /*$profile_ext = $profile_image->getClientOriginalExtension();
        $profile_data = base64_encode(file_get_contents($profile_image));
        $profile_src = 'data: ' . $profile_ext . ';base64,' . $profile_data;
        */
        $background_image = UploadedFile::fake()->image('background2.png');
        $background_path = $background_image->storeAs('public/images', $background_image->getClientOriginalName());
        /*$background_ext = $background_image->getClientOriginalExtension();
        $background_data = base64_encode(file_get_contents($background_image));
        $background_src = 'data: ' . $background_ext . ';base64,' . $background_data;
        */
        $data = [
            'name' => 'test1',
            'introduction' => 'HelloWorld2',
            'profile_picture' => $profile_path,
            'background_picture' => $background_path
        ];
        $user->update($data);

        $this->assertEquals('test1', $user['name']);
        $this->assertEquals('HelloWorld2', $user['introduction']);
        $this->assertEquals($profile_path, $user['profile_picture']);
        $this->assertEquals($background_path, $user['background_picture']);
    }
}
