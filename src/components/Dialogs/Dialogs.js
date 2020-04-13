import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageDialogActionCreator, addMessageDialogsActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(el => (
        <DialogItem name={el.name} id={el.id}/>
    ));

    let messageElements = state.messages.map(el => (
       <Message message={el.name}/>
    ));

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageDialogsActionCreator());
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateMessageDialogActionCreator(text));
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.messageBox}>
                    <textarea onChange={onNewMessageChange}
                              value={state.newDialogText}
                              placeholder={state.placeholderText}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;