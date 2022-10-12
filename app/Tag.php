<?php

namespace App;
use App\Thread;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['post_id', 'tag_id', 'tag'];
    
    public function threads()
    {
        return $this->belongsToMany(Thread::class, 'thread_tag');
    }
}
