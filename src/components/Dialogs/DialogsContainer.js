import React from 'react';
import {addMessageDialogsActionCreator, updateMessageDialogActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageDialogsActionCreator());
    };

    let onNewMessageClick = (text) => {
        props.store.dispatch(updateMessageDialogActionCreator(text));
    };

    return(
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageClick={onNewMessageClick}
                 dialogsPage={state.dialogsPage}/>
    );
};

export default DialogsContainer;