import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const [jobs, setJobs] = useState([]);
    const getAllJobs = () => {
        axios.get('/api/jobs').then((response) => {
            console.log(response.data);
            setJobs(response.data);
            document.getElementById('screenshot')?.setAttribute('src', response.data);
        });
    }

    useEffect(() => {
        getAllJobs();
    }, []);

    const handleJobClick = (id) => {
        console.log(id);

        // axios.get(`/jobs/${id}`).then((response) => {
        //     console.log(response.data);
        //     setJobs(response.data);
        //     document.getElementById('screenshot')?.setAttribute('src', response.data);
        // });
    }
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">

                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        {/* Dashboard */}
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {jobs.map((job) => (

                                    <a
                                        key={job.id}
                                        href={route('job.show', job.id)}
                                        // onClick={() => handleJobClick(job.id)}
                                        className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                    >

                                        <div className="pt-3 sm:pt-5">
                                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                                {job.title}
                                            </h2>

                                            <p className="mt-4 text-sm/relaxed">
                                                {job.company}
                                            </p>
                                            <p className="mt-4 text-sm/relaxed">
                                                {job.location}
                                            </p>
                                            <h4>
                                                Minimum Experience : {job.min_experience}
                                            </h4>
                                            <p className="mt-4 text-sm/relaxed font-semibold font-red">
                                                {job.imp_notes}
                                            </p>
                                        </div>

                                        <div className="pt-3 sm:pt-5">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <svg
                                                    className="size-5 sm:size-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g fill="#FF2D20">
                                                        <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                                Company Logo
                                            </h2>

                                            <p className="mt-4 text-sm/relaxed">
                                                Laracasts offers thousands of video
                                                tutorials on Laravel, PHP, and
                                                JavaScript development. Check them
                                                out, see for yourself, and massively
                                                level up your development skills in
                                                the process.
                                            </p>
                                            <p className="mt-4 text-sm/relaxed">
                                                Deadline : {job.deadline} <br />
                                                Posted on : {new Date(job.created_at).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            {/* Laravel v{laravelVersion} (PHP v{phpVersion}) */}
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
