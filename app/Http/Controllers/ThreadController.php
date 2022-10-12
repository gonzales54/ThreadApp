<?php

namespace App\Http\Controllers;

use App\User;
use App\Thread;
use App\Comment;
use App\Tag;
use Illuminate\Http\Request;
use App\Events\ThreadAdded;
use App\Events\ThreadDeleted;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $threads = Thread::all();
        for($i = 0; $i < $threads->count(); $i++) {
            $threads[$i]['comments'] = Comment::where('thread_id', $threads[$i]['id'])->get();
        }
        return response()->json(['threads' => $threads]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->id !== null) {
            $request->validate([
                'thread_title' => 'required|max:255',
                'thread_description' => 'required|max:255',
                'tag' =>'required|max:255'
            ]);
            
            preg_match_all('/#([a-zA-z0-9０-９ぁ-んァ-ヶ亜-熙]+)/u', $request->tag, $match);
            $tags = [];
            
            foreach($match[1] as $tag) {
                $record = Tag::firstOrCreate(['tag' => $request->tag]);
                array_push($tags, $record);
            }
            
            $tags_id = [];
            foreach($tags as $tag) {
                array_push($tags_id, $tag->id);
            }
            
            $thread = User::find($request->id)->threads()->create([
                'user_name' => $request->name,
                'thread_title' => $request->thread_title,
                'thread_description' => $request->thread_description,
                'tag' => $request->tag,
                'tag_id' => $tags_id[0]
            ]);
            
            $thread->tags()->attach($tags_id);

            event(new ThreadAdded($thread));
            
            return response()->json(['thread' => $thread, 'msg' => 'スレッドを作成しました。']);            
        } else {
            return response()->json(['message' => 'ログインしてください。', 401]);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show(Thread $thread, $id)
    {
        $thread = Thread::where('id', $id)->get();
        $comments = Comment::where('thread_id', $id)->get();
        return response()->json(['thread' => $thread, 'comments' => $comments]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread, $id)
    {
        $thread = Thread::findOrFail($id); 
        $tag_id = $thread->tags->pluck('id');
        $thread->tags()->detach($tag_id);
        
        $tag = Tag::find($tag_id[0]);
        if($tag->threads->count() === 0) {
            $tag->delete();
        }
        event(new ThreadDeleted($thread));
        $thread->delete();
        return response()->json(['msg' => $thread . 'was deleted']);  
    }
}
