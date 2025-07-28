import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import React, { useState } from 'react'
import { router } from '@inertiajs/react';
import axios from 'axios';
function Create() {

    const [educationData, setEducationData] = useState({
        secondary: '',
        higherSecondary: '',
        graduation: '',
    });

    const [jobsData, setJobsData] = useState({
        title: '',
        company: '',
        location: '',
        salary: '',
        min_experience: '',
        jobType: '',
        imp_notes: '',
        deadline: '',
    });


    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleValidation = () => {

        if (!educationData.secondary) {
            setErrorMessage('Please enter secondary education');
            return false;
        }

        if (!educationData.higherSecondary) {
            setErrorMessage('Please enter higher secondary education');
            return false;
        }

        if (!educationData.graduation) {
            setErrorMessage('Please enter graduation');
            return false;
        }

        if (!jobsData.title) {
            setErrorMessage('Please enter job title');
            return false;
        }
        if (!jobsData.company) {
            setErrorMessage('Please enter company name');
            return false;
        }
        if (!jobsData.location) {
            setErrorMessage('Please enter location');
            return false;
        }
        if (!jobsData.salary) {
            setErrorMessage('Please enter salary');
            return false;
        }

        if (!jobsData.min_experience) {
            setErrorMessage('Please enter minimum experience');
            return false;
        }
        if (!jobsData.jobType) {
            setErrorMessage('Please enter job type');
            return false;
        }

        if (!jobsData.imp_notes) {
            setErrorMessage('Please enter important notes');
            return false;
        }

        if (!jobsData.deadline) {
            setErrorMessage('Please enter deadline');
            return false;
        }
        return true;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEducationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setJobsData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check form validation
        if (!handleValidation()) {
            return;
        }
        // Clear error message
        setErrorMessage('');
        try {
            const response = await axios.post('/api/job', { ...educationData, ...jobsData }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.success) {
                setEducationData({
                    secondary: '',
                    secondarySession: '',
                    higherSecondary: '',
                    higherSecondarySession: '',
                    graduation: '',
                    graduationSession: '',
                });
                setJobsData({
                    title: '',
                    company: '',
                    location: '',
                    salary: '',
                    min_experience: '',
                    jobType: '',
                    imp_notes: '',
                    deadline: '',
                });
            }
            setSuccessMessage(response.data.success);
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    };

    // Handle form submission with inertia
    const handleSubmit2 = (event) => {
        event.preventDefault();
        router.post(route('admin.job.store'), {
            ...jobsData,
            ...educationData
        }, {
            onSuccess: (response) => {
                setEducationData({
                    secondary: '',
                    secondarySession: '',
                    higherSecondary: '',
                    higherSecondarySession: '',
                    graduation: '',
                    graduationSession: '',
                });
                setJobsData({
                    title: '',
                    company: '',
                    location: '',
                    salary: '',
                    min_experience: '',
                    jobType: '',
                    imp_notes: '',
                    deadline: '',
                });
                alert('Job created successfully');
            },
            onError: (e) => {
                console.log(e);
            },
        });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Navbar />

                {/* Content Area */}
                <main className="p-6 space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Create Job</h2>
                        <h4 className="text-lg font-bold text-green-800 mb-6 text-center">{successMessage}</h4>
                        <h4 className="text-lg font-bold text-red-800 mb-6 text-center">{errorMessage}</h4>
                        {/* <form action={route('admin.job.store')} className=" " method="post"> */}
                        <form onSubmit={handleSubmit} className=" " method="post">
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-5">
                                    <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.title}
                                        onChange={handleChange}
                                    />

                                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title </label>
                                </div>
                                <div className="relative z-0 mb-5 group">
                                    <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.company}
                                        onChange={handleChange}
                                    />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name </label>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-5">
                                    <input type="text" name="salary" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.salary}
                                        onChange={handleChange}
                                    />

                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary </label>
                                </div>
                                <div className="relative z-0 mb-5 group">
                                    <input type="text" name="jobType" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.jobType}
                                        onChange={handleChange}
                                    />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Type </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5">
                                    <input type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.location}
                                        onChange={handleChange}
                                    />
                                    <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Location </label>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="min_experience" id="min_experience" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.min_experience}
                                        onChange={handleChange}
                                    />
                                    <label for="min_experience" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Minimum Experience </label>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="imp_notes" id="imp_notes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.imp_notes}
                                        onChange={handleChange}
                                    />
                                    <label for="imp_notes" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Importan Notes</label>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="deadline" id="deadline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                        value={jobsData.deadline}
                                        onChange={handleChange}
                                    />
                                    <label for="deadline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
                                </div>
                            </div>
                            <h2 className="text-lg font-semibold mb-4">Educational Qualification</h2>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-5">
                                    <input type="text" name="secondary" id="secondary" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        value={educationData.secondary}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label for="secondary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Secondary </label>
                                </div>

                                <div className="relative z-0 mb-5">
                                    <input type="text" name="higherSecondary" id="higherSecondary" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        value={educationData.higherSecondary}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label for="higherSecondary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Higher Secondary </label>
                                </div>

                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-5">
                                    <input type="text" name="graduation" id="graduation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        value={educationData.graduation}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label for="graduation" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Graduation </label>
                                </div>
                            </div>
                            <div className="z-0 w-full mb-5 group text-end ">
                                <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Create
