import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './layout';

// Sample club data
const clubsData = [
    {
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
        ],
        upcomingMatches: [
            'Barcelona vs Real Madrid - 25th Oct 2023',
            'Atletico Madrid vs Barcelona - 30th Oct 2023'
        ],
        squad: [
            { name: 'Lionel Messi', position: 'Forward', age: 34, imageUrl: 'https://i.imgur.com/38vrsgE.jpeg' },
            { name: 'Gerard Piqué', position: 'Defender', age: 35, imageUrl: 'https://i.pinimg.com/564x/01/16/a3/0116a399e71f78e58a73abe97cd0247f.jpg' },
            { name: 'Sergio Busquets', position: 'Midfielder', age: 33, imageUrl: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/747833.jpg' },
            { name: 'Ansu Fati', position: 'Forward', age: 19, imageUrl: 'https://barcarealfans.com/wp-content/uploads/2023/03/IMG_3727.png' },
            { name: 'Jordi Alba', position: 'Defender', age: 33, imageUrl: 'https://img.a.transfermarkt.technology/portrait/header/69751-1691332760.jpg' },
            { name: 'Frenkie de Jong', position: 'Midfielder', age: 24, imageUrl: 'https://www.sporf.com/wp-content/uploads/2022/08/e2669820-gettyimages-1398801072.jpg' },
        ]
    },
    {
        name: 'Manchester United',
        established: '1878',
        stadium: 'Old Trafford',
        manager: 'Ole Gunnar Solskjær',
        imageUrl: 'https://i.imgur.com/CweTyr5.png',
        description: 'Manchester United is a professional football club based in Manchester, England. The club competes in the Premier League, the top tier of English football.',
        achievements: [
            '3x UEFA Champions League Winners',
            '20x English Premier League Champions',
            '12x FA Cup Winners'
        ],
        upcomingMatches: [
            'Manchester United vs Liverpool - 23rd Oct 2023',
            'Manchester City vs Manchester United - 6th Nov 2023'
        ],
        squad: [
            { name: 'Bruno Fernandes', position: 'Midfielder', age: 28, imageUrl: 'https://i.imgur.com/5sv4p5J.jpg' },
            { name: 'Harry Maguire', position: 'Defender', age: 28, imageUrl: 'https://i.imgur.com/GwVkj2y.jpg' },
            { name: 'Marcus Rashford', position: 'Forward', age: 24, imageUrl: 'https://i.imgur.com/VyLi9G7.jpg' },
            { name: 'Paul Pogba', position: 'Midfielder', age: 28, imageUrl: 'https://i.imgur.com/xuK2YQ0.jpg' },
            { name: 'David de Gea', position: 'Goalkeeper', age: 31, imageUrl: 'https://i.imgur.com/Po6QNFO.jpg' },
            { name: 'Cristiano Ronaldo', position: 'Forward', age: 36, imageUrl: 'https://i.imgur.com/FC0os8C.jpg' },
        ]
    },
    {
        name: 'Bayern Munich',
        established: '1900',
        stadium: 'Allianz Arena',
        manager: 'Julian Nagelsmann',
        imageUrl: 'https://i.imgur.com/gxHXfpF.png',
        description: 'Bayern Munich is a professional football club based in Munich, Germany. The club competes in the Bundesliga, the top tier of German football.',
        achievements: [
            '6x UEFA Champions League Winners',
            '31x Bundesliga Champions',
            '20x DFB-Pokal Winners'
        ],
        upcomingMatches: [
            'Bayern Munich vs Borussia Dortmund - 20th Oct 2023',
            'RB Leipzig vs Bayern Munich - 27th Oct 2023'
        ],
        squad: [
            { name: 'Robert Lewandowski', position: 'Forward', age: 33, imageUrl: 'https://i.imgur.com/OPsr3t7.jpg' },
            { name: 'Joshua Kimmich', position: 'Midfielder', age: 26, imageUrl: 'https://i.imgur.com/9O2RLYP.jpg' },
            { name: 'Manuel Neuer', position: 'Goalkeeper', age: 35, imageUrl: 'https://i.imgur.com/U7IDF8l.jpg' },
            { name: 'Thomas Müller', position: 'Forward', age: 32, imageUrl: 'https://i.imgur.com/syV1a4o.jpg' },
            { name: 'David Alaba', position: 'Defender', age: 29, imageUrl: 'https://i.imgur.com/GiJQpZE.jpg' },  // Note: As of my last knowledge update in 2022, Alaba is no longer with Bayern Munich. Adjust as necessary.
            { name: 'Leroy Sané', position: 'Winger', age: 26, imageUrl: 'https://i.imgur.com/32TnKXH.jpg' },
        ]
    }
];

const ClubProfile = () => {
    const { name } = useParams();

    const club = clubsData.find(c => c.name.replace(/\s+/g, '-').toLowerCase() === name.toLowerCase()); // Find the club based on the name URL parameter

    if (!club) {
        return <h2>Club not found</h2>;
    }

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

    return (
        <Layout>
            <div className="club-profile p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                        <img src={club.imageUrl} alt={club.name} className="w-64 h-64 object-cover mb-6" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">{club.name}</h2>
                    <p className="text-xl text-gray-600 mb-6 text-center">{club.established} - {club.stadium}</p>

                    <div className="history mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Club History</h3>
                        <p className="text-gray-600">{club.description}</p>
                    </div>

                    <div className="achievements mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Achievements</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {club.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="squad mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Current Squad</h3>
                        <Slider {...settings}>
                            {club.squad.map((player, index) => (
                                <div key={index} className="player p-4 bg-gray-200 rounded-lg shadow-xl flex flex-col items-center text-center">
                                    <img src={player.imageUrl} alt={player.name} className="w-36 h-36 rounded-full mb-6 object-cover mx-auto" />
                                    <h3 className="text-2xl text-gray-800">{player.name}</h3>
                                    <p className="text-lg text-gray-600">{player.position}, {player.age} yrs</p>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="upcoming-matches mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Upcoming Matches</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {club.upcomingMatches.map((match, index) => (
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
