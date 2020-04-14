import React from 'react';
import {addMessageDialogsActionCreator, updateMessageDialogActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateMessageDialogActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageDialogsActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;