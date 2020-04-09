import React from 'react';
import './App.css';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
};

export default App;

