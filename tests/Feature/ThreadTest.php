<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use App\Thread;

class ThreadTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function testCreate()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->get('/user/createthread');
        $response>assertStatus(200);

        $thread = $this->postJson('/api/create_thread', [
            'user_name' => $user->name,
            'thread_title' => 'thread1',
            'thread_description' => 'Hello World',
            'tag' => 'tag1',
            'tag_id' => 1
        ]);
        $thread->assertStatus(200);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->get('/');
        $response = $this->actingAs($user)->get('/user/createthread');
        $response>assertStatus(200);
        
        $thread = User::find($user->id)->threads()->create([
            'user_name' => $user->name,
            'thread_title' => 'thread1',
            'thread_description' => 'Hello World',
            'tag' => 'tag1',
            'tag_id' => 1
        ]);
        $data = Thread::findOrFail($thread->id);
        $data->delete();
        $this->assertDeleted($data);
    }
}
