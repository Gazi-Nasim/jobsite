import { usePage } from '@inertiajs/react';
import axios from 'axios';
import React, { useState } from 'react';

function Apply() {
    const { id } = usePage().props
    const [applicantData, setApplicantData] = useState({
        name: '',
        email: '',
        cv_text: '',
        job_id: id
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isApplied, setIsApplied] = useState(false)

    // Handle value change for submission
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setApplicantData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    };


    // Validate form data

    const handleValidation = () => {
        if (!applicantData.name) {
            setErrorMessage('Please enter your name');
            return false;
        }
        if (!applicantData.email) {
            setErrorMessage('Please enter your email');
            return false;
        }
        if (!applicantData.cv_text) {
            setErrorMessage('Please enter your CV link or text');
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check form validation
        if (!handleValidation()) {
            return;
        }
        // Clear error message
        setErrorMessage('');
        try {
            const response = await axios.post(`/api/application`, applicantData);
            if (response.data.success) {
                setSuccessMessage('Application submitted successfully');
                setIsApplied(true)
                setApplicantData({
                    name: '',
                    email: '',
                    cv_text: '',
                    job_id: id
                });
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-2x1 font-bold text-green-800 mb-6 text-center">{successMessage ? 'Application submitted successfully' : 'Apply Here'}</h2>
                <h3 className="text-2x2 font-bold text-red-800 mb-6 text-center">{errorMessage}</h3>

                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your full name"
                            required
                            value={applicantData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="you@example.com"
                            required
                            value={applicantData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">CV Link or Short Text</label>
                        <input
                            type="text"
                            name="cv_text"
                            id="cv"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="https://yourcv.link or short note"
                            required
                            value={applicantData.cv_text}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-between">

                        <div className="text-end">
                            <a
                                href={route('job.show', id)}
                                type="submit"
                                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-150"

                            >
                                Back to the Job
                            </a>
                        </div>

                        <div className="text-end">
                            {!isApplied &&
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-150"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Apply;
