import React from 'react';
import { useParams } from 'react-router-dom';

// Sample player data, you can replace this with API call or other methods to get the data
const playersData = [
    { name: 'John Doe', role: 'Midfielder', age: 20, imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { name: 'Jane Smith', role: 'Forward', age: 22, imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { name: 'Alex Johnson', role: 'Defender', age: 25, imageUrl: 'https://randomuser.me/api/portraits/men/25.jpg' },
];

const PlayerProfile = () => {
    const { name } = useParams();
    const player = playersData.find(p => p.name === name);

    if (!player) {
        return <h2>Player not found</h2>;
    }

    return (
        <div className="player-profile p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <img src={player.imageUrl} alt={player.name} className="w-32 h-32 rounded-full object-cover" />
                    <button className="bg-primary-500 text-white px-6 py-2 rounded-full focus:outline-none hover:bg-blue-600 transition-colors">
                        Follow
                    </button>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">{player.name}</h2>
                <p className="text-xl text-gray-600 mb-6">{player.role}, {player.age} years old</p>

                <div className="bio mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Biography</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>

                <div className="daily-posts mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Daily Posts</h3>
                    <ul className="space-y-2">
                        <li className="bg-gray-100 p-4 rounded-lg">Today's training was intense!</li>
                        <li className="bg-gray-100 p-4 rounded-lg">Excited for the upcoming match against Barcelona!</li>
                        <li className="bg-gray-100 p-4 rounded-lg">Hard work always pays off!</li>
                    </ul>
                </div>

                <div className="cv mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Curriculum Vitae (CV)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>2020 - Present: Midfielder at Real Madrid</li>
                        <li>2018 - 2020: Midfielder at Real Madrid Castilla</li>
                        <li>2016 - 2018: Real Madrid Youth Academy</li>
                    </ul>
                </div>

                <div className="achievements">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>2022 - La Liga Champion</li>
                        <li>2021 - UEFA Champions League Winner</li>
                        <li>2020 - La Liga Best Midfielder Award</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;