import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/Object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let init_state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = init_state, action) => {
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

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    };
};
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
export const setTotalUsers = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers: totalUsers
    }
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
};
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
};

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    const response = await userAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if(response.data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};


export default usersReducer;
