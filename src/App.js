import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Profile from './Profile';
import Messages from './messages';  // Adjust the path to your actual file structure
import Message from './messages/[id]';  // Update the import path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} /> {/* Added route for messages */}
        <Route path="/messages/:id" element={<Message />} />  {/* Added route for individual message */}
      </Routes>
    </Router>
  );
}

export default App;
