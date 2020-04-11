import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props) => {
    debugger;
  return (
      <div>
          <ProfileInfo />
          <MyPosts posts={props.posts}/>
      </div>
  );
};

export default Profile;