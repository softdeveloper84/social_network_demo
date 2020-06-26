import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
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
    try{
        const response = await profileAPI.updateStatus(status);
        if(!response.data.resultCode){
            dispatch(setUserStatus(status));
        }
    }catch (error) {
    }
};

export const savePhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if(!response.data.resultCode){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if(!response.data.resultCode){
        dispatch(getUserProfile(userId));
    }else{
        dispatch(stopSubmit("edit_profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
};

export default profileReducer;
