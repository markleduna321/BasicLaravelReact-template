<?php

namespace App\Http\Controllers;

use App\Models\Tutoring;
use App\Http\Requests\StoreTutoringRequest;
use App\Http\Requests\UpdateTutoringRequest;

class TutoringController extends Controller
{
     public function index()
    {
        return response()->json(Tutoring::orderBy('created_at', 'desc')->get());
    }

    public function store(StoreTutoringRequest $request)
    {
        $validated = $request->validated();
        $tutoringRequest = Tutoring::create([
            ...$validated,
            'status' => 'Pending',
        ]);

        return response()->json($tutoringRequest, 201);
    }

    public function update(UpdateTutoringRequest $request, Tutoring $tutoringRequest)
    {
        $validated = $request->validated();
        $tutoringRequest->update($validated);

        return response()->json($tutoringRequest);
    }
}
