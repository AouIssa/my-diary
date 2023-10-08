import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';  // Import the specific icon from react-icons

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './layout';

// Sample player data, you can replace this with API call or other methods to get the data
const playersData = [
    { name: 'John Doe', role: 'Midfielder', age: 20, imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { name: 'Jane Smith', role: 'Forward', age: 22, imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { name: 'Alex Johnson', role: 'Defender', age: 25, imageUrl: 'https://randomuser.me/api/portraits/men/25.jpg' },
];

const PlayerProfile = () => {
    const { name } = useParams();
    const player = playersData.find(p => p.name === name);
    const [isFollowed, setIsFollowed] = useState(false); // Add this state variable

    if (!player) {
        return <h2>Player not found</h2>;
    }

    // Sample media data
    const media = [
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', thumbnail: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', thumbnail: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
        { type: 'image', src: 'https://via.placeholder.com/150' },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{ padding: "20px 0" }}> {/* Add this line to add padding around the dots */}
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        )
    };

    return (
        <Layout>
            <div className="player-profile p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                        <img src={player.imageUrl} alt={player.name} className="w-32 h-32 rounded-full object-cover" />
                        <div className="flex items-center space-x-4">
                            <button
                                className={`px-3 py-2 rounded-full focus:outline-none transition-colors text-white ${isFollowed
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-primary-500 hover:bg-blue-600'
                                    }`}
                                onClick={() => setIsFollowed(!isFollowed)}
                            >
                                {isFollowed ? 'Followed' : 'Follow'}
                            </button>
                            {/* Updated messaging icon button */}
                            <button
                                className="p-2 rounded-full focus:outline-none transition-colors bg-primary-500 hover:bg-blue-600"
                                style={{ color: 'white' }}  // Changed the color to white for better visibility
                            >
                                <FiMessageCircle size={24} />
                            </button>
                        </div>
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

                    <div className="media mt-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pictures & Videos</h3>
                        <Slider {...sliderSettings}>
                            {media.map((item, index) => (
                                <div key={index} className="px-1">
                                    <div className="m-2">
                                        {item.type === 'video' ? (
                                            <video src={item.src} className="w-full h-64 object-cover rounded-lg" controls poster={item.thumbnail}></video>
                                        ) : (
                                            <img src={item.src} alt="" className="w-full h-64 object-cover rounded-lg" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default PlayerProfile;