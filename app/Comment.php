<?php

namespace App;
use App\User;
use App\Thread;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'user_id', 'user_name', 'index', 'thread_id', 'thread_title', 'comment', 'bold', 'italic', 'underline', 'src'
    ];
    
    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
