import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './layout';

const clubData = {
    name: 'FC Barcelona',
    established: '1899',
    stadium: 'Camp Nou',
    manager: 'Xavi',
    imageUrl: 'https://i.imgur.com/GiJvIqf.png',
    description: 'FC Barcelona is a professional football club based in Barcelona, Spain. The club plays in La Liga, the top tier of Spanish football.',
    achievements: [
        '5x UEFA Champions League Winners',
        '26x La Liga Champions',
        '31x Copa del Rey Winners'
        // Add more as needed
    ],
    upcomingMatches: [
        'Barcelona vs Real Madrid - 25th Oct 2023',
        'Atletico Madrid vs Barcelona - 30th Oct 2023'
        // Add more as needed
    ]
};

const ClubProfile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // ... (same settings as before)
    };

    return (
        <Layout>
            <div className="club-profile p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                        <img src={clubData.imageUrl} alt={clubData.name} className="w-64 h-64 object-cover mb-6" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">{clubData.name}</h2>
                    <p className="text-xl text-gray-600 mb-6 text-center">{clubData.established} - {clubData.stadium}</p>

                    <div className="history mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Club History</h3>
                        <p className="text-gray-600">{clubData.description}</p>
                    </div>

                    <div className="achievements mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Achievements</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {clubData.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="squad mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Current Squad</h3>
                        <Slider {...settings}>
                            {/* Replace with actual player data */}
                            {/* You can map over an array of player data similar to the HomePage component */}
                        </Slider>
                    </div>

                    <div className="upcoming-matches mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Upcoming Matches</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {clubData.upcomingMatches.map((match, index) => (
                                <li key={index}>{match}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ClubProfile;
