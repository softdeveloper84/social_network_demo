const SEND_MESSAGE = "SEND-MESSAGE";

let init_state = {
    dialogs: [
        {id: 1, name: "Valera"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Anastasia"},
        {id: 4, name: "Gregor"},
        {id: 5, name: "Victor"},
    ],
    messages:  [
        {id:1, "message": "Hello"},
        {id:2, "message": "How are you, bro?"},
        {id:3, "message": "thanks bro, i am fine"},
    ],
};

const dialogsReducer = (state = init_state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            return {
                ...state,
                messages: [...state.messages, {id: 78, message: action.message}]
            };
        }
        default:
            return state;
    }
};

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    };
};

export default dialogsReducer;
