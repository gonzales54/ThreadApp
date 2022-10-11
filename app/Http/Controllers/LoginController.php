<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\User;
 
class LoginController extends Controller
{
    public function login(Request $request)
    {
        $user = User::create([
            'name' => 'test',
            'email'=>'test@test.com',
            'password'=>bcrypt('test')
       ]);
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
 
        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Login successful'], 200);
        }
 
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect'],
        ]);
    }
 
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
