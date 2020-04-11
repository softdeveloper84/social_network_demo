import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = () => {
    debugger;
  return (
      <div>
          <ProfileInfo />
          <MyPosts/>
      </div>
  );
};

export default Profile;