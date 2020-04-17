const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let init_state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = init_state, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
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
        default:
            return state;
    }

};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    };
};

export const unfollow = (userId) => {
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

export default usersReducer;
