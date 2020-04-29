import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map(u =>
                    <User user={u}
                           key={u.id}
                           followingInProgress={props.followingInProgress}
                           follow={props.follow}
                           unfollow={props.unfollow}/>
                           )}
        </div>
    );
};

export default Users;
