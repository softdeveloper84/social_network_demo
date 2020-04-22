import styles from "./users.module.css";
import logo from "../../assets/images/no_person.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>{
                pages.map(p => (
                    <button key={p}
                            className={ props.currentPage === p && styles.selectedPage }
                            onClick={(e) => props.onPageChanged(p)}>{p}</button>
                ))}
            </div>
            <div>{
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={ u.photos.small != null ? u.photos.small : logo } className={styles.userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                { u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => { props.follow(u.id) }}>Follow</button> }
                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <span>
                                <div>
                                    {/*{"u.location.city"}*/}
                                </div>
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;