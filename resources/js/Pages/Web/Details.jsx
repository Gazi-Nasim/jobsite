import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

function Details() {
    const { id } = usePage().props
    const [job, setJob] = React.useState([]);

    useEffect(() => {
        getJobDetails();
    }, [])

    const getJobDetails = () => {
        axios.get(`/api/job/${id}`).then((response) => {
            setJob(response.data);
            document.getElementById('screenshot')?.setAttribute('src', response.data);
        });
    }

    return (


        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center">

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg md:justify-between md:flex m-auto col-4">
                    <div className="p-6 text-gray-900 ">


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="">
                                <img className="rounded-full w-32 h-32 " src="//corporate.bdjobs.com/logos/37122_3.png" alt="logo of Universal Study Agency" />
                            </div>

                            <div >
                                <h1>Position: {job.title}</h1>
                                <p>Company : {job.company}</p>
                                <p>Location : {job.location}</p>
                                <p>Deadline : {job.deadline}</p>
                                <h1>Details</h1>
                                <p>Maximum Age: {job.max_age}</p>
                                <p>Minimum Experience: {job.min_experience}</p>
                            </div>

                        </div>

                        <div className='flex '>
                            <div className="title">
                                <h2 className='font-bold large'>Requirments</h2>
                                <p className='font-bold'>Education</p>
                                <ul>
                                    <li>{job.educations?.[0]?.secondary || ''}</li>
                                    <li>{job.educations?.[0]?.higherSecondary || ''}</li>
                                    <li>{job.educations?.[0]?.graduation || ''}</li>
                                </ul>

                            </div>

                        </div>
                        <div className="flex justify-end">
                            <div className="flex justify-end mr-2">
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded align-end" onClick={() => { window.location.href = '/' }}>See all Jobs</button>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded align-end" onClick={() => { window.location.href = `/apply/${job.id}` }}>Apply Now</button>
                            </div>
                        </div>

                        {/* <div className="flex col-sm-12">
                                    <div className="row featured-wrap" onClick={() => goToJobDetails('1389524')} style={{ height: '157px' }}>

                                        <div className="col-sm-8 details">
                                            <div className="title">
                                                <a onClick={() => goToJobDetails('1389524')} target="_blank" href="https://jobs.bdjobs.com/jobdetails/?id=1389524&amp;ln=1">
                                                    Student Consultants
                                                </a>
                                            </div>
                                            <div className="company">
                                                {element.name}
                                                Universal Study Agency
                                            </div>

                                            <div className="loccal">
                                                <p>
                                                    <img className="img-responsive" src="//corporate.bdjobs.com/logos/37122_3.png" alt="logo of Universal Study Agency" />
                                                </p>
                                            </div>

                                        </div>

                                        <div className="col-sm-4 logo">
                                            <img className="img-responsive" src="//corporate.bdjobs.com/logos/37122_3.png" alt="logo of Universal Study Agency" />
                                        </div>

                                        <div className="col-sm-12 details">
                                            <div className="exp loccal" style={{ margintop: "5px" }}>
                                                <p>
                                                    <img src="" alt="Experience required" />
                                                    2 to 3 year(s)
                                                </p>
                                                <p className="dt">
                                                    <img src="" alt="Deadline for apply the job" />
                                                    <strong>25 Aug</strong> 2025
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 details">
                                            <div className="requires hide">
                                                <div className="promo-text">
                                                    <ul style={{ margin: '5px 0 0 0' }}>
                                                        <li></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <img src="" className="down-arrow" alt="" />
                                </div> */}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Details
