import React from 'react';
import Slider from "react-slick";

import { FaCommentDots, FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './layout';

const HomePage = () => {
  const navigate = useNavigate();  // Updated this line
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

  const players = [
    { name: 'John Doe', role: 'Midfielder', age: 20, imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { name: 'Jane Smith', role: 'Forward', age: 22, imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { name: 'Alex Johnson', role: 'Defender', age: 25, imageUrl: 'https://randomuser.me/api/portraits/men/25.jpg' },
  ];

  const coaches = [
    { name: 'Sarah Smith', experience: '15yrs exp', imageUrl: 'https://randomuser.me/api/portraits/women/30.jpg' },
    { name: 'Michael Brown', experience: '10yrs exp', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Rachel Green', experience: '8yrs exp', imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg' },
  ];

  const clubs = [
    {
      name: 'FC Barcelona',
      description: 'Top tier club',
      imageUrl: 'https://i.imgur.com/GiJvIqf.png'
    },
    {
      name: 'Manchester United',
      description: 'Premier League club',
      imageUrl: 'https://i.imgur.com/CweTyr5.png'
    },
    {
      name: 'Bayern Munich',
      description: 'Bundesliga giant',
      imageUrl: 'https://i.imgur.com/gxHXfpF.png'
    },
  ];

  return (
    <Layout>

      <div className="bg-gray-100 p-2 pb-20">
        <main className="bg-white rounded shadow-lg p-6 mb-10">
          {/* Talented Players Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Talented Players</h2>
            <Slider {...settings}>
              {players.map(player => (
                <div key={player.name} className="p-4 bg-gray-200 rounded-lg shadow-xl flex flex-col items-center text-center">
                  <img src={player.imageUrl} alt={player.name} className="w-36 h-36 rounded-full mb-6 object-cover mx-auto" />
                  <h3 className="text-2xl text-gray-800">{player.name}</h3>
                  <p className="text-lg text-gray-600">{player.role}, {player.age}yrs</p>
                </div>
              ))}
            </Slider>
          </section>

          {/* Captains/Coaches Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Captains/Coaches</h2>
            <Slider {...settings}>
              {coaches.map(coach => (
                <div key={coach.name} className="p-4 bg-gray-200 rounded-lg shadow-xl flex flex-col items-center text-center">
                  <img src={coach.imageUrl} alt={coach.name} className="w-36 h-36 rounded-full mb-6 object-cover mx-auto" />
                  <h3 className="text-2xl text-gray-800">{coach.name}</h3>
                  <p className="text-lg text-gray-600">{coach.experience}</p>
                </div>
              ))}
            </Slider>
          </section>

          {/* Clubs Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Clubs</h2>
            <Slider {...settings}>
              {clubs.map(club => (
                <div key={club.name} className="p-4 bg-gray-200 rounded-lg shadow-xl flex flex-col items-center text-center">
                  <img src={club.imageUrl} alt={club.name} className="w-36 h-36 mb-6 object-cover mx-auto" />
                  <h3 className="text-2xl text-gray-800">{club.name}</h3>
                  <p className="text-lg text-gray-600">{club.description}</p>
                </div>
              ))}
            </Slider>
          </section>
        </main>

      </div>
    </Layout>

  );
};

export default HomePage;
