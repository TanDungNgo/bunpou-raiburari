<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserController extends Controller
{
    // public function onLogin(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|string|email',
    //         'password' => 'required|string',
    //     ]);
    //     if ($validator->fails()) {
    //         return response()->json([
    //             'validate_err' => $validator->messages(),
    //         ]);
    //     }
    //     if (Auth::attempt([
    //         'email' => $request->input('email'),
    //         'password' => $request->input('password')
    //     ])) {
    //         $user = User::where('email', $request->input('email'))->first();
    //         // $token = $user->createToken($user->email . '_Token')->plainTextToken;

    //         return response()->json([
    //             'status' => 200,
    //             'message' => "Login successed",
    //             'user' => $user,
    //         ]);
    //     }
    //     return response()->json([
    //         'status' => 401,
    //         'message' => "Login failed",
    //     ]);
    // }

    // public function register(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'username' => 'required|min:3',
    //         'email' => 'required|string|email|unique:users,email',
    //         'password' => 'required|string|min:3|max:32',
    //     ]);
    //     if ($validator->fails()) {
    //         return response()->json([
    //             'validate_err' => $validator->messages(),
    //         ]);
    //     }

    //     $user = new User;
    //     $user->username = $request->input('username');
    //     $user->email = $request->input('email');
    //     $user->password = bcrypt($request->input('password'));
    //     // $user->remember_token = Str::random(60);
    //     $user->save();
    //     return response()->json([
    //         'status' => 200,
    //         'message' => "Signup successed",
    //     ]);
    // }
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
