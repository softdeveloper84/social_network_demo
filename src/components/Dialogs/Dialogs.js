import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageDialogActionCreator, addMessageDialogsActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    debugger;
    let newMessageElement = React.createRef();

    let dialogsElements = props.dialogsData.map(el => (
        <DialogItem name={el.name} id={el.id}/>
    ));

    let messageElements = props.messageData.map(el => (
       <Message message={el.name}/>
    ));

    let addMessage = () => {
        props.dispatch(addMessageDialogsActionCreator());
    };

    let onUpdateMessage = () => {
        let text = newMessageElement.current.value;
        console.log(text);
        props.dispatch(updateMessageDialogActionCreator(text));
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.messageBox}>
                    <textarea onChange={onUpdateMessage} ref={newMessageElement} value={props.newDialogText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;