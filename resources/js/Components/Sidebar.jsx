import React, { useState } from 'react';
import { useToggleSidebarContext } from '@/Context/ToggleSidebarContext';
const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState('');
    const { sidebarStyle } = useToggleSidebarContext();

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? '' : menu);
    };

    return (
        <div className="" style={sidebarStyle}>
            <aside className="w-64 bg-gray-800 text-white h-screen overflow-y-auto shadow-md">
                {/* Header */}
                <div className="p-4 text-xl font-bold border-b border-gray-700">Shomvob</div>

                {/* Menu */}
                <nav className="p-4 space-y-1 text-sm">
                    {/* Dashboard */}
                    <div>
                        <button
                            onClick={() => toggleMenu('dashboard')}
                            className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-700"
                        >
                            <span className="flex items-center gap-2">
                                📊 Dashboard
                            </span>

                            {openMenu === 'dashboard' ? <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                            </svg>
                                : <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                </svg>
                            }
                        </button>
                        {openMenu === 'dashboard' && (
                            <div className="ml-4 mt-1 space-y-1">
                                <a href={route('admin.job.create')} className="block px-2 py-1 rounded hover:bg-gray-700">Post job</a>
                                <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Dashboard v2</a>
                                <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Dashboard v3</a>
                            </div>
                        )}
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
