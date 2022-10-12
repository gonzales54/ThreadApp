<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'password' => 'required|max:255',
            'password_confirmation' => 'required|max:255|same:password'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['msg' => 'Created Successfully', 'status_code' => 200], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();
        return response()->json(['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'max:255',
            'introduction' => 'max:255',
            'profile' => 'image|nullable',
            'background' => 'image|nullable'
        ]);

        $user = Auth::user();
        $user->name = $request->name;
        $user->introduction = $request->introduction;
        
        if($request->profile !== null) {
            $profileImage = $request->profile;
            $profilePath = $profileImage->storeAs('public/images', $profileImage->getClientOriginalName());
            $user->profile_picture = '/storage/images/'.$profileImage->getClientOriginalName();
        }

        if($request->background !== null) {
            $backgroundImage = $request->background;
            $backendPath = $backgroundImage->storeAs('public/images', $backgroundImage->getClientOriginalName());
            $user->background_picture = '/storage/images/'.$backgroundImage->getClientOriginalName();
        }

        $user->save();
        return response()->json(['msg' => 'updated successfully', 'status_code' => 200]);
    }
}
