<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Comment;
use App\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::all();
        return response()->json(['tags' => $tags]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag, $id)
    {
        $tag = Tag::find($id);
        $threads = Thread::where('tag_id', $id)->get();
        for($i = 0; $i < $threads->count(); $i++) {
            $threads[$i]['comments'] = Comment::where('thread_id', $threads[$i]['id'])->get();
        }

        return response()->json(['threads' => $threads, 'tag' => $tag]);
    }
}
