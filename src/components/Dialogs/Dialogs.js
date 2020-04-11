import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Valera" id="1"/>
                <DialogItem name="Andrew" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Alex" id="4"/>
                <DialogItem name="Viktor" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How is your code!?"/>
                <Message message="All right"/>
            </div>
        </div>
    );
};

export default Dialogs;