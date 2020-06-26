const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initState = {
    dialogs: [
        {id: 1, name: "Valera"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Anastasia"},
        {id: 4, name: "Gregor"},
        {id: 5, name: "Victor"},
    ] as Array<DialogType>,
    messages:  [
        {id:1, message: "Hello"},
        {id:2, message: "How are you, bro?"},
        {id:3, message: "thanks bro, i am fine"},
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initState

const dialogsReducer = (state = initState, action: any): InitialStateType => {
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

type SendMessageType = {
    type: typeof SEND_MESSAGE
    message: string
}

export const sendMessage = (message: string): SendMessageType => {
    return {
        type: SEND_MESSAGE,
        message
    };
};

export default dialogsReducer;
