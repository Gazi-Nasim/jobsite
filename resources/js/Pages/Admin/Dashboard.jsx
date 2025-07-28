import React, { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Navbar from '@/Components/Navbar';

export default function AdminDashboard() {

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-700 text-sm">Total Users</h2>
                            <p className="text-2xl font-bold text-indigo-600">1,234</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-700 text-sm">Active Jobs</h2>
                            <p className="text-2xl font-bold text-indigo-600">87</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-700 text-sm">Pending Reviews</h2>
                            <p className="text-2xl font-bold text-indigo-600">14</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                        <p className="text-sm text-gray-500">You can add recent user logs, job postings, etc. here.</p>
                    </div>
                </main>
            </div>
        </div>
    );
}
