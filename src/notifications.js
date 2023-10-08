import React from 'react';
import { FaArrowLeft, FaThumbsUp, FaComment, FaUserPlus, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

const notifications = [
    {
        text: 'John Doe liked your post.',
        icon: <FaThumbsUp />,
        timestamp: '2 mins ago',
        image: 'https://picsum.photos/id/1/50/50',
    },
    {
        text: 'Jane Smith commented on your photo.',
        icon: <FaComment />,
        timestamp: '15 mins ago',
        image: 'https://picsum.photos/id/2/50/50',
    },
    {
        text: 'Michael joined SportsConnect.',
        icon: <FaUserPlus />,
        timestamp: '30 mins ago',
        image: null, // no image for this notification
    },
    {
        text: 'Your post has reached 100 likes!',
        icon: <FaHeart />,
        timestamp: '1 hour ago',
        image: 'https://picsum.photos/id/3/50/50',
    },
    // Add more notifications as needed
];

const NotificationsPage = () => {
    const navigate = useNavigate();  // Use useNavigate hook for navigation

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-primary-500 text-white p-4 shadow mb-6 flex items-center sticky top-0 z-10">
                <button
                    onClick={goBack}
                    className="p-2 rounded-full hover:bg-primary-400 transition duration-300 mr-4"
                >
                    <FaArrowLeft />
                </button>
                <h2 className="text-2xl font-bold">Notifications</h2>
            </div>
            <ul className="border-t border-gray-200 p-4">
                {notifications.map((notification, index) => (
                    <li key={index} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white hover:shadow-lg transition duration-300 rounded-md mb-2">
                            <div className="flex items-center">
                                <div className="mr-3 p-2 rounded-full bg-primary-100 text-primary-500">
                                    {notification.icon}
                                </div>
                                <div>
                                    <p className="text-gray-800">{notification.text}</p>
                                    <span className="text-sm text-gray-600">{notification.timestamp}</span>
                                </div>
                            </div>
                            {notification.image && (
                                <img src={notification.image} alt="Content" className="w-14 h-14 rounded-lg shadow" />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <BottomNavBar />
        </div>
    );
};

export default NotificationsPage;
