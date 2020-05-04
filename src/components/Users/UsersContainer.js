import React from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalItemsCount,
    getUsers
} from "../../redux/UsersSelectors";


class UsersContainer extends React.Component{
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return <>
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}/>
            { this.props.isFetching ? <Preloader/> : null }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        // users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNum) => {
//             dispatch(setCurrentPageAC(pageNum));
//         },
//         setTotalUsers: (totalUsers) => {
//             dispatch(setTotalUsersAC(totalUsers));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
