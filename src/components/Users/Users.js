import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount}
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
