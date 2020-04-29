import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";


let init_state = {
    posts: [
        {id:1, name: "Alex", message: "Hi", likeCont: 10},
        {id:1, name: "Lexus", message: "Hahaha", likeCont: 42},
    ],
    profile: null,
    status: ""
};


const profileReducer = (state = init_state, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    name: "newUser",
                    message: action.message,
                    likeCont: 9
                }],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPost = (message) => {
    return {
        type: ADD_POST,
        message
    };
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if(!response.data.resultCode){
        dispatch(setUserStatus(status));
    }

};

export default profileReducer;
