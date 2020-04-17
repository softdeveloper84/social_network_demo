import React from "react";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainter";


const Profile = (props) => {
  return (
      <div>
          <ProfileInfo profile={props.profile}/>
          <MyPostsContainer/>
      </div>
  );
};

export default Profile;
