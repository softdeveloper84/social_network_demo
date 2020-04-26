import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";


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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if(data.resultCode === 0){
                const userId = data.data.id;
                const email = data.data.email;
                const login = data.data.login;
                dispatch(setAuthUserData(userId, email, login));
            }
        });
    }
};

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        debugger
        authAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
                dispatch(getAuthUserData());
            }
        })
    }
};

export default authReducer;
