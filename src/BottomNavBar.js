import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);  // Using location.pathname to set the active state
  }, [location.pathname]);

  const navItems = [
    { path: '/HomePage', icon: <FaHome className="text-3xl" />, label: 'Home' },
    { path: '/Profile', icon: <FaUser className="text-3xl" />, label: 'Profile' },
    { path: '/notifications', icon: <FaBell className="text-3xl" />, label: 'Notifications' },
    { path: '/settings', icon: <FaCog className="text-3xl" />, label: 'Settings' },
  ];

  return (
    <nav className="bg-white shadow-lg px-2 py-3 fixed bottom-0 left-0 right-0 flex items-center justify-around z-10">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className={`cursor-pointer text-gray-600 hover:text-primary-500 transition duration-300 p-2 rounded-full ${active === item.path && 'bg-primary-100 text-primary-500'
            }`}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default BottomNavBar;
