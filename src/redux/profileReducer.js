const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let init_state = {
    posts: [
        {id:1, name: "Alex", message: "Hi", likeCont: 10},
        {id:2, name: "Ivan", message: "My first post", likeCont: 1},
        {id:3, name: "Ivan", message: "Second post", likeCont: 121},
    ],
    newPostText: "profile name"
};


const profileReducer = (state = init_state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;