import React from 'react';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';

const Layout = ({ children }) => (
    <div className="bg-gray-100 min-h-screen flex flex-col">
        <TopNavBar />

        <div className="flex-grow p-2 overflow-auto">
            {children}
        </div>

        <div className="flex-shrink-0 mt-12">
            <BottomNavBar />
        </div>
    </div>
);

export default Layout;
