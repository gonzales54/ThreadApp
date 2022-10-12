<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use App\Thread;
use App\Comment;
use App\Providers\RouteServiceProvider;

class CommentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->get('/thread/{id}');
        $response->assertStatus(200);
    }

    public function testStore()
    { 
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->get('/user/createthread');
        $thread = User::find($user->id)->threads()->create([
            'user_id' => $user->id,
            'user_name' => $user->name,
            'thread_title' => 'thread1',
            'thread_description' => 'Hello World',
            'tag' => 'tag1',
            'tag_id' => 1
        ]);
        $response = $this->actingAs($user)->get('/thread/' . $thread->id);
        $comment = $this->postJson('/api/create_thread' ,[
            'user_id' => $user->id,
            'user_name' => $user->name,
            'index' => rand(1, 999),
            'thread_id' => $thread->id,
            'thread_title' => $thread->thread_title,
            'comment' => 'test' . rand(1, 5),
            'src' => '/storage/images/profile.png',
            'bold' => true,
            'italic' => true,
            'underline' => true
        ]);
        $comment->assertStatus(200);
    }
}
