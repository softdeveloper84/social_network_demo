import React from "react";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainter";


const Profile = (props) => {
  return (
      <div>
          <ProfileInfo status={props.status}
                       profile={props.profile}
                       isOwner={props.isOwner}
                       updateUserStatus={props.updateUserStatus}
                       saveProfile={props.saveProfile}
                       savePhoto={props.savePhoto}/>
          <MyPostsContainer/>
      </div>
  );
};

export default Profile;
