import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noPersonLogo from "../../../assets/images/no_person.jpeg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if(!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : noPersonLogo} className={s.mainPhoto}/>
                <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
                { editMode
                    ? <ProfileDataForm initialValues={profile}
                                                profile={profile}
                                                onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   changeEditMode={ () => setEditMode(true) }/> }
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};


export default ProfileInfo;



