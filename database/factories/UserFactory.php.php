<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('test'),
        'profile_picture' => '/storage/images/profile.png',
        'background_picture' => '/storage/images/background.jpg',
        'introduction' => 'Hello World'
    ];
});
