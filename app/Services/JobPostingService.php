<?php

namespace App\Services;

use App\Models\JobEducation;
use App\Models\PostedJob;
use Illuminate\Support\Facades\DB;

class JobPostingService
{
    /** * Store a newly created job posting.
     *
     * @param StoreJobRequest $request
     * @return void
     */
    public function createJobWithEducation(array $data): PostedJob
    {
        // if the keys in $data exactly match the fillable attributes defined in your PostedJob model. Lile this:

        // return $job = PostedJob::create($data);
        // If you need to handle the education data separately, you can do it like this:

        return PostedJob::create([
            'title' => $data['title'],
            'company' => $data['company'],
            'location' => $data['location'],
            'salary' => $data['salary'],
            'min_experience' => $data['min_experience'],
            'jobType' => $data['jobType'],
            'imp_notes' => $data['imp_notes'],
            'deadline' => $data['deadline'],
        ])->each(function ($job) use ($data) {
            JobEducation::create([
                'posted_job_id' => $job->id,
                'secondary' => $data['secondary'],
                'higherSecondary' => $data['higherSecondary'],
                'graduation' => $data['graduation'] ?? null,
            ]);
        });
    }

    /**
     * Get all job postings.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllJobs()
    {
        return PostedJob::with('education')->get();
    }
}
