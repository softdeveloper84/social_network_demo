import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => (
        <DialogItem name={el.name} id={el.id} key={el.id}/>
    ));

    let messageElements = props.dialogsPage.messages.map(el => (
       <Message message={el.name} key={el.id}/>
    ));

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    if (!props.isAuth) return <Redirect to="/login"/>;

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.messageBox}>
                    <textarea onChange={onNewMessageChange}
                              value={props.dialogsPage.newDialogText}
                              placeholder={props.dialogsPage.placeholderText}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
