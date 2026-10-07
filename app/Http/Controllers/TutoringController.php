<?php

namespace App\Http\Controllers;

use App\Models\Tutoring;
use App\Http\Requests\StoreTutoringRequest;
use App\Http\Requests\UpdateTutoringRequest;

class TutoringController extends Controller
{
     public function index()
    {
        return response()->json(TutoringRequest::orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_name' => 'required|string|max:255',
            'station_number' => 'required|string|max:255',
            'topic' => 'required|string|max:255',
            'issue_summary' => 'required|string',
        ]);

        $tutoringRequest = TutoringRequest::create($validated);

        return response()->json($tutoringRequest, 201);
    }

    public function update(Request $request, TutoringRequest $tutoringRequest)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:Pending,Resolved',
        ]);

        $tutoringRequest->update($validated);

        return response()->json($tutoringRequest);
    }
}
