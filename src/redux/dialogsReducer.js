const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_DIALOGS = "UPDATE-MESSAGE-DIALOGS";

let init_state = {
    dialogs: [
        {id: 1, name: "Valera"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Anastasia"},
        {id: 4, name: "Gregor"},
        {id: 5, name: "Victor"},
    ],
    messages:  [
        {id:1, "name": "Hello"},
        {id:2, "name": "How are you, bro?"},
        {id:3, "name": "thanks bro, i am fine"},
    ],
    newDialogText: "",
    placeholderText: "Enter your message"
};

const dialogsReducer = (state = init_state, action) => {
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