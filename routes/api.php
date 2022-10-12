<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:sanctum'], function() { 
    Route::get('/user', 'UserController@show');
    Route::post('/userupdate/{id}', 'UserController@update');
    Route::post('/logout', 'LoginController@logout'); 
    Route::post('/threads/{id}', 'CommentController@store');
    Route::post('/create_thread', 'ThreadController@store');
    Route::delete('/delete/{id}', 'ThreadController@destroy');
});

Route::post('/login', 'LoginController@login');
Route::post('/register', 'UserController@store');
Route::get('/threads', 'ThreadController@index');  
Route::get('/threads/{id}', 'ThreadController@show');

Route::get('/tags', 'TagController@index');
Route::get('/tag_threads/{id}', 'TagController@show');
Route::get('/comments/{id}', 'CommentController@index');