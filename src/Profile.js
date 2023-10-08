import React from 'react';
import { FaHome, FaUser, FaBell, FaCog, FaCommentAlt } from 'react-icons/fa';
import Layout from './layout';

const Profile = () => {
    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen p-2">
                <header className="mb-4">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">Welcome Back, Alex!</h1>
                </header>

                <main className="bg-white rounded shadow p-6">
                    {/* User Profile Summary */}
                    <div className="mb-6 text-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/40.jpg"
                            alt="User"
                            className="w-32 h-32 rounded-full mb-4 mx-auto"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">Alex Johnson</h2>
                        <p className="text-gray-600">Enthusiastic Runner | Basketball Player</p>
                    </div>

                    {/* Feed of Activities */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h3>
                        <ul>
                            <li className="mb-4 p-4 bg-gray-100 rounded shadow">
                                <p><strong>Alex</strong> joined a <strong>5K Running</strong> event.</p>
                                <p className="text-gray-500 text-sm mt-1">20 minutes ago</p>
                            </li>
                            <li className="mb-4 p-4 bg-gray-100 rounded shadow">
                                <p><strong>Alex</strong> posted a new <strong>Basketball Trickshot</strong> video.</p>
                                <p className="text-gray-500 text-sm mt-1">2 hours ago</p>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Profile;
