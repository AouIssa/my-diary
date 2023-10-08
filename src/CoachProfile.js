import React, { useState } from 'react';  // Added useState for managing following state
import { useParams } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './layout';

// Sample coaches data, replace this with actual data or API call
const coachesData = [
    { name: 'Sarah Smith', experience: '15 years', imageUrl: 'https://randomuser.me/api/portraits/women/30.jpg', philosophy: 'Attacking football, high pressing game.' },
    { name: 'Michael Brown', experience: '10 years', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', philosophy: 'Defensive solidity, counter-attacking.' },
    { name: 'Rachel Green', experience: '8 years', imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg', philosophy: 'Possession-based football, building from the back.' }
];

const CoachProfile = () => {
    const { name } = useParams();
    const coachName = name.split('-').join(' ');  // Replace hyphens with spaces
    const coach = coachesData.find(c => c.name === coachName);  // Now it will match the names correctly

    const [isFollowing, setIsFollowing] = useState(false);  // Added state to handle following

    if (!coach) {
        return <h2>Coach not found</h2>;
    }

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);  // Toggle the following state
    };

    return (
        <Layout>
            <div className="coach-profile p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                        <img src={coach.imageUrl} alt={coach.name} className="w-32 h-32 rounded-full object-cover" />
                        <div className="flex items-center space-x-4">  {/* Grouped the buttons together */}
                            <button
                                onClick={() => setIsFollowing(!isFollowing)}
                                className={`px-3 py-2 rounded-full focus:outline-none transition-colors text-white ${isFollowing ? 'bg-green-500 hover:bg-green-600' : 'bg-primary-500 hover:bg-blue-600'}`}
                            >
                                {isFollowing ? 'Followed' : 'Follow'}
                            </button>
                            <button
                                className="p-2 rounded-full focus:outline-none transition-colors bg-primary-500 hover:bg-blue-600 text-white"
                            >
                                <FiMessageCircle size={24} />
                            </button>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">{coach.name}</h2>
                    <p className="text-xl text-gray-600 mb-6">{coach.experience} experience</p>

                    <div className="philosophy mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Coaching Philosophy</h3>
                        <p className="text-gray-600">{coach.philosophy}</p>
                    </div>

                    <div className="achievements mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Achievements</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>2022 - UEFA Champions League Winner</li>
                            <li>2021 - Premier League Champion</li>
                            {/* Add more achievements as needed */}
                        </ul>
                    </div>

                    <div className="media mt-6">
                        <h3 className="text-2xl font-bold text-gray-800">Pictures & Videos</h3>
                        <Slider {...settings}>
                            {media.map((item, index) => (
                                <div key={index} className="p-4">
                                    {item.type === 'image' ? (
                                        <img src={item.src} alt="media" className="rounded-lg w-full h-auto" />
                                    ) : (
                                        <video controls className="rounded-lg w-full h-auto">
                                            <source src={item.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CoachProfile;
