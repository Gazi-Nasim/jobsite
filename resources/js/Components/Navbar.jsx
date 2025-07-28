import React, { useState } from 'react'
import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';
import { useToggleSidebarContext } from '@/Context/ToggleSidebarContext';

function Navbar() {
    const user = usePage().props.auth.user;
    const { toggleSidebar } = useToggleSidebarContext();

    return (
        <header className="bg-white shadow p-4 flex items-center justify-between">
            <div className="text-gray-600 flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="me-4"
                    type="button"
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <span className="text-xl font-semibold">Dashboard</span>
            </div>

            <div className="hidden sm:flex sm:items-center">
                <div className="relative ms-3">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    {user.name}
                                    <svg
                                        className="-me-0.5 ms-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Navbar
