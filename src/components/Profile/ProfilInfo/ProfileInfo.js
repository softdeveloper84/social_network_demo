import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noPersonLogo from "../../../assets/images/no_person.jpeg";
import topImage from "../../../assets/images/top_image.jpeg";
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/*<div className={s.container}>*/}
            {/*    <img src={topImage} alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large? props.profile.photos.large : noPersonLogo}/>
                <ProfileStatus status="Hello"/>
            </div>
        </div>
    );
};

export default ProfileInfo;



