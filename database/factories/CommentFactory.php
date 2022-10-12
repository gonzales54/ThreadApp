<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'user_name' => 'test',
        'index' => rand(1, 5),
        'thread_id' => 4,
        'thread_title' => 'thread' . rand(1, 5),
        'comment' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        'src' => '/storage/images/profile.png',
        'bold' => true,
        'italic' => true,
        'underline' => true
    ];
});
