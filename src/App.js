import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Profile from './Profile';
import Messages from './messages';  // Adjust the path to your actual file structure
import Message from './messages/[id]';  // Update the import path as needed
import SignUp from './signup';  // Import the SignUp component
import NotificationsPage from './notifications';
import SettingsPage from './settings';
import HomePage from './HomePage';
import PlayerProfile from './PlayerProfile'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} /> {/* Added route for messages */}
        <Route path="/messages/:id" element={<Message />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/player/:name" element={<PlayerProfile />} />
        
      </Routes>
    </Router>
  );
}

export default App;
