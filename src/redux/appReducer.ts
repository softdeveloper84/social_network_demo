import {getAuthUserData} from "./authReducer";
import {isBoolean} from "util";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    isInitialized: boolean,
}

const initialState: InitialStateType = {
    isInitialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                isInitialized: true,
            };
        default:
            return state;
    }
};

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;
