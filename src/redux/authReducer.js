import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if(data.resultCode === 0){
                const userId = data.data.id;
                const email = data.data.email;
                const login = data.data.login;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
                dispatch(getAuthUserData());
            } else{
                const message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                // dispatch(getAuthUserData());
            }
        })
    }
};

export default authReducer;
