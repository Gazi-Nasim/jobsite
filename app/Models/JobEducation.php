<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobEducation extends Model
{
    protected $table = 'job_education';
    protected $guarded = ['id'];

    public function job()
    {
        return $this->belongsTo(PostedJob::class , 'posted_job_id');
    }
}
