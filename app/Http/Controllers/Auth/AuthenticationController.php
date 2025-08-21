<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function loginRequest(Request $request)
    {
        $credentials = $request->only('email', 'password');
        return response()->json([
            'user' => $credentials,
        ]);
    }

    public function store(Request $request)
    {
        //
    }
}
