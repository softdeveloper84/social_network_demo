import React from "react";
import {CreateField} from "../../Common/FormsControls/FormControls";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../Common/FormsControls/FormControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            { error && <div className={style.formSummaryControl}>{error}</div> }
            <div>
                <b>Full name</b>: {CreateField("Input","Full name", "fullName", "text", [])}
            </div>
            <div>
                <b>Looking for a job</b>: {CreateField("Input", "Looking for a jobs", "lookingForAJob", "checkbox", [])}
            </div>
            <div>
                <b>My professional skills</b>: {CreateField("TextArea", "My professional skills", "lookingForAJobDescription", "text", [])}
            </div>
            <div>
                <b>About me</b>: {CreateField("TextArea", "about me", "aboutMe", "", [])}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}</b> {CreateField("Input","" + key, "contacts." + key, "text", [])}
                    </div>
                })}
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: "edit_profile"})(ProfileDataForm);

export default ProfileDataFormReduxForm;
