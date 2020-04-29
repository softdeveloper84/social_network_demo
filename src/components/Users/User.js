import styles from "./users.module.css";
import logo from "../../assets/images/no_person.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


const Users = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={ user.photos.small != null ? user.photos.small : logo } className={styles.userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    { user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { unfollow(user.id) }}>Unfollow</button>
                        : <button disabled={ followingInProgress.some(id => id === user.id)}
                                  onClick={() => { follow(user.id) }}>Follow</button> }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <span>
                    <div>
                        {/*{"u.location.city"}*/}
                    </div>
                </span>
            </span>
            </div>
    )};

export default Users;
