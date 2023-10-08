import { useParams, useNavigate } from 'react-router-dom';  // Import useParams and useNavigate
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const ChatPage = () => {
    const { id } = useParams();  // Get the id from the route parameter
    const navigate = useNavigate();  // Use useNavigate for navigation
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({});

    // Dummy data, replace these with actual API calls
    const usersData = {
        '1': { name: 'John Doe', imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg' },
        // Add more users for different IDs
    };

    // Dummy messages data, replace with API call
    const chatsData = {
        '1': [
            { sender: 'John', message: 'Hey, how are you?' },
            { sender: 'You', message: 'I am good, thank you!' },
        ],
        // Add more messages for different IDs
    };

    useEffect(() => {
        if (id) {
            setMessages(chatsData[id] || []);
            setUser(usersData[id] || {});
        }
    }, [id]);

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white p-4 shadow mb-6 flex items-center sticky top-0 z-10">
                <button
                    onClick={() => navigate(-1)}  // Updated to use navigate(-1) method
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition duration-300 mr-4"
                >
                    <FaArrowLeft className="text-primary-500" />
                </button>
                <img
                    src={user.imageUrl || ''}
                    alt={user.name || 'User'}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-2xl font-bold">{user.name || 'User'}</h2>
            </div>

            <div className="flex-grow overflow-auto p-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : ''}`}>
                        <p className="inline-block p-2 rounded bg-gray-200 max-w-3/4 break-words">
                            {msg.message}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            {msg.sender}
                        </p>
                    </div>
                ))}
            </div>

            <div className="border-t p-4 bg-white fixed inset-x-0 bottom-0">
                <input
                    type="text"
                    placeholder="Type a message"
                    className="border rounded p-2 w-full"
                />
            </div>
        </div>
    );
};

export default ChatPage;
