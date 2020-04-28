import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
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
                posts: [...state.posts, {id: 5, name: "newUser", message: action.message, likeCont: 9}],
            };
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

export const addPost= (message) => {
    return {
        type: ADD_POST,
        message
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

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        })
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        })
    }
};

export default profileReducer;
