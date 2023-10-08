import React from 'react';
import { FaArrowLeft, FaArrowRight, FaKey, FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

const SettingsPage = () => {
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
                <h2 className="text-2xl font-bold">Settings</h2>
            </div>
            <div className="p-4 space-y-6">
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Account</h3>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-300 cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaKey className="text-primary-500 text-2xl" />
                            <span className="text-lg text-gray-800">Change Password</span>
                        </div>
                        <FaArrowRight className="text-gray-500 text-lg" />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-300 cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-primary-500 text-2xl" />
                            <span className="text-lg text-gray-800">Update Email Address</span>
                        </div>
                        <FaArrowRight className="text-gray-500 text-lg" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Privacy</h3>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-300 cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaLock className="text-primary-500 text-2xl" />
                            <span className="text-lg text-gray-800">Manage Privacy Preferences</span>
                        </div>
                        <FaArrowRight className="text-gray-500 text-lg" />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-300 cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaUserShield className="text-primary-500 text-2xl" />
                            <span className="text-lg text-gray-800">Control Your Data</span>
                        </div>
                        <FaArrowRight className="text-gray-500 text-lg" />
                    </div>
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default SettingsPage;
