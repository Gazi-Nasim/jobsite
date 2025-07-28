<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\JobEducation;
use App\Models\PostedJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostjobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $validatedJob = $request->validate([
                'title' => 'required|string|max:255',
                'company' => 'required|string',
                'location' => 'required|string',
                'salary' => 'required',
                'min_experience' => 'nullable|numeric',
                'jobType' => 'required|string',
                'imp_notes' => 'nullable|string',
                'deadline' => 'required|date',
            ]);

            $validatedEdu = $request->validate([
                'secondary' => 'required|string',
                'higherSecondary' => 'required|string',
                'graduation' => 'nullable|string',
            ]);
            $postJob = PostedJob::create($validatedJob);
            $validatedEdu['posted_job_id'] = $postJob->id;
            JobEducation::create($validatedEdu);

            DB::commit();
            // return redirect()->route('admin.job.index')->with('success', 'Job created successfully.');
            return response()->json([
                'success' => 'Job created successfully.'
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => $th->getMessage()

            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $data = PostedJob::with('educations')->find($id);
        // return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
