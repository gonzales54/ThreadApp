<?php

namespace App;
use App\User;
use App\Comment;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = ['user_name', 'thread_title', 'thread_description', 'tag', 'tag_id'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'thread_tag');
    }
}
