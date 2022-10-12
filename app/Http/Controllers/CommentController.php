<?php

namespace App\Http\Controllers;

use App\User;
use App\Comment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Events\CommentAdded;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $comments = Auth::user()->comments;
        return response()->json(['comments' => $comments]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'comment'=>'required|max:255'
        ]);

        $comment = Auth::user()->comments()->create([
            'user_id' => $request->user_id,
            'user_name' => $request->user_name,
            'index' => $request->index,
            'thread_id' => $request->id,
            'thread_title' => $request->thread_title,
            'comment' => $request->comment,
            'src' => $request->src,
            'bold' => $request->bold,
            'italic' => $request->italic,
            'underline' => $request->underline
        ]);
        
        event(new CommentAdded($comment));

        return response()->json(['msg' => 'comment successfully', 'status_code' => 200]);
    }
}
