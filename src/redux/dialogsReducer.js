const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_DIALOGS = "UPDATE-MESSAGE-DIALOGS";


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 111,
                "name": state.newDialogText
            };
            state.messages.push(message);
            state.newDialogText = "";
            return state;
        case UPDATE_MESSAGE_DIALOGS:
            state.newDialogText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageDialogsActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
};

export const updateMessageDialogActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_DIALOGS,
        newText: text
    };
};

export default dialogsReducer;