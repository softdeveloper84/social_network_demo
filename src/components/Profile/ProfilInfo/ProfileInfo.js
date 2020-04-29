import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noPersonLogo from "../../../assets/images/no_person.jpeg";
import topImage from "../../../assets/images/top_image.jpeg";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if(!profile){
        return <Preloader />
    }
    return (
        <div>
            {/*<div className={s.container}>*/}
            {/*    <img src={topImage} alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : noPersonLogo}/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;



