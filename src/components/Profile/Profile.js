import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import s from './Profile.module.css';


const Profile = (props) => {
  return (
      <div>
          <ProfileInfo />
          <MyPosts posts={props.posts}
                   addPost={props.addPost}/>
      </div>
  );
};

export default Profile;