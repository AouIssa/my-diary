import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const TopNavBar = () => {
  const navigate = useNavigate();  // Use the useNavigate hook for navigation

  const goToMessages = () => {
    navigate('/messages');  // Use navigate to change the route
  };

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-10">
      <img
        src="/images/logo.png"
        alt="Logo"
        className="h-14 cursor-pointer"
        onClick={() => navigate('/')}  // Updated to use navigate
      />

      <button
        onClick={goToMessages}
        className="cursor-pointer text-gray-600 hover:text-primary-500 transition duration-300 p-2"
      >
        <FaCommentAlt className="text-3xl" />
      </button>
    </nav>
  );
};

export default TopNavBar;
