import dialogsReducer from "./dialogsReducer";
import profileReducer from  "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, name: "Alex", message: "Hi", likeCont: 10},
                {id:2, name: "Ivan", message: "My first post", likeCont: 1},
                {id:3, name: "Ivan", message: "Second post", likeCont: 121},
            ],
            newPostText: "profile name"
        },
        dialogsPage: {
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
        },
        sidebar:{
            friends:[
                {id:1, name:"Alex", img:"data:image/jpeg;base64,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"},
                {id:2, name:"Michele", img:"data:image/jpeg;base64,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"},
            ],
            navbarItemsData: [
                {id:1, title:"Profile", path:"/profile"},
                {id:2, title:"Dialogs", path:"/dialogs"},
                {id:3, title:"News", path:"/news"},
                {id:4, title:"Music", path:"/music"},
                {id:5, title:"Settings", path:"/settings"},
            ],
        },
    },
    _callSubscriber: () => {},

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this);
    },
};

export default store;


