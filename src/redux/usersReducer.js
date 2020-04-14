const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let init_state = {
    users: [
        // {id:1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
        //     followed:true, fullName: 'Alex', status: 'active', location: {city: 'kiev', country: 'Ukraine'}},
        // {id:2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
        //     followed:false, fullName: 'Lexus', status: 'active', location: {city: 'grodno', country: 'Belarus'}},
        // {id:3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
        //     followed:true, fullName: 'Ivanov', status: 'active', location: {city: 'moskow', country: 'Russian'}},
    ],
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    };
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    };
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;