import React from "react";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainter";


const Profile = (props) => {
  return (
      <div>
          <ProfileInfo />
          <MyPostsContainer store={props.store}/>
      </div>
  );
};

export default Profile;