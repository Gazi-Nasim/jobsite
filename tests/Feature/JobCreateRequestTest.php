<?php

namespace Tests\Feature;

use App\Http\Requests\StoreJobRequest;
use Dotenv\Validator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class JobCreateRequestTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_valid_data_passes_validation()
    {
        $data = [
            "title" => "Software Engineer",
            "company" => "Advanced IT",
            "location" => "Mohakhali DOHS",
            "salary" => "40k",
            "min_experience" => "2",
            "jobType" => "Full time",
            "imp_notes" => "Don't apply if u don't have minimum experience",
            "deadline" => "29 july 2025",
            "secondary" => "SSC",
            "higherSecondary" => "HSC",
            "graduation" => "Graduate",
        ];
        $request = new StoreJobRequest();
        $validatedData = $request->validate($data);
        $this->assertTrue($validatedData->isValid());
    }
}
