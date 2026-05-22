<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', Password::defaults()],
            'account_type' => ['nullable', 'in:personal_free,personal_pro,business,agency,admin'],
            'selected_plan' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'location' => ['nullable', 'string', 'max:255'],
        ]);

        $accountType = $validated['account_type'] ?? 'personal_free';
        $role = $accountType === 'agency' ? 'police' : ($accountType === 'admin' ? 'admin' : 'user');

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $role,
            'account_type' => $accountType,
            'selected_plan' => $validated['selected_plan'] ?? null,
            'phone' => $validated['phone'] ?? null,
            'location' => $validated['location'] ?? null,
        ]);

        $token = $user->createToken('api')->plainTextToken;

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'account_type' => $user->account_type,
                'selected_plan' => $user->selected_plan,
            ],
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (! $user || ! Hash::check($validated['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 422);
        }

        $token = $user->createToken('api')->plainTextToken;

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'account_type' => $user->account_type,
                'selected_plan' => $user->selected_plan,
            ],
            'token' => $token,
        ]);
    }

    public function user(Request $request)
    {
        $user = $request->user();
        return response()->json($user);
    }
}
