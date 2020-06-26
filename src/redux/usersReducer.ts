import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/Object-helpers";
import {ListBox} from "primereact/listbox";
import {UserType} from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initState = {
    users: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUsersCount: 50 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, // array of users id
};

type InitStateType = typeof initState;

const usersReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:{
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE:
            return  {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS:
            return {...state, totalUsersCount: action.totalUsers};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,  action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => {
    return {
        type: FOLLOW,
        userId
    };
};
type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => {
    return {
        type: UNFOLLOW,
        userId: userId
    };
};
type SetUsersType = {
    type: typeof SET_USERS
    users: UserType
}
export const setUsers = (users: UserType): SetUsersType => {
    return {
        type: SET_USERS,
        users: users
    }
};
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
type SetTotalUsersType = {
    type: typeof SET_TOTAL_USERS
    totalUsers: number
}
export const setTotalUsers = (totalUsers: number): SetTotalUsersType => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers: totalUsers
    }
};
type ToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
};
type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
};

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    const response = await userAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount));
};
const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if(response.data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId: number) => async (dispatch: any) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};
export const unfollow = (userId: number) => async (dispatch: any) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};

export default usersReducer;
