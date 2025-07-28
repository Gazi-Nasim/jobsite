<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostedJob extends Model
{
    protected $table = 'posted_jobs';
    protected $guarded = ['id'];

    public function educations()
    {
        return $this->hasMany(JobEducation::class , 'posted_job_id');
    }
}
