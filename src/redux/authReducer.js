import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "authReducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "authReducer/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        const userId = response.data.id;
        const email = response.data.email;
        const login = response.data.login;
        dispatch(setAuthUserData(userId, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        if(response.resultCode === 0){
            dispatch(getAuthUserData());
        } else{
            if (response.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            const message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer;
