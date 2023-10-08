import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const messages = [
    { id: 1, name: 'John Doe', message: 'Hey, how are you?', timestamp: '5 mins ago' },
    // Add more messages as needed
];

const MessagesPage = () => {
    const navigate = useNavigate();  // Use useNavigate hook for navigation

    const openChat = (id) => {
        navigate(`/messages/${id}`);  // Use navigate to change the route
    };

    const goBack = () => {
        navigate(-1);  // Updated to use navigate(-1) to go back
    };

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }} // Adjusted the duration and ease
            className="bg-gray-100 min-h-screen"
        >
            <div className="bg-white p-4 shadow mb-6 flex items-center sticky top-0 z-10">
                <button
                    onClick={goBack}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition duration-300 mr-4"
                >
                    <FaArrowLeft className="text-primary-500" />
                </button>
                <h2 className="text-2xl font-bold">Messages</h2>
            </div>
            <ul className="border-t border-gray-200">
                {messages.map((msg) => (
                    <li
                        key={msg.id}
                        onClick={() => openChat(msg.id)}
                        className="cursor-pointer hover:bg-gray-50 transition duration-300"
                    >
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="User"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">{msg.name}</h3>
                                    <p className="text-gray-600">{msg.message}</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">{msg.timestamp}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default MessagesPage;
