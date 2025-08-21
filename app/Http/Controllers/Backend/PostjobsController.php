<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobRequest;
use App\Models\JobEducation;
use App\Models\PostedJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Services\JobPostingService;

class PostjobsController extends Controller
{
    protected $JobpostingService;

    public function __construct(JobPostingService $JobpostingService)
    {
        $this->JobpostingService = $JobpostingService;
    }

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
    public function store(StoreJobRequest  $request)
    {

        try {
            DB::beginTransaction();
            $data = $request->validated();
            $job = $this->JobpostingService->createJobWithEducation($data);

            DB::commit();
            return response()->json([
                'success' => true,
                'job' => $job
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => $th->getMessage()
            ], 500);
        }

        return response()->json([
            'success' => true,
            'job' => $data
        ]);
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
