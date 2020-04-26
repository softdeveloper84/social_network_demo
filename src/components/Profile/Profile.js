import React from "react";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainter";
import {updateUserStatus} from "../../redux/profileReducer";


const Profile = (props) => {
  return (
      <div>
          <ProfileInfo status={props.status}
                       profile={props.profile}
                       updateUserStatus={props.updateUserStatus}/>
          <MyPostsContainer/>
      </div>
  );
};

export default Profile;
