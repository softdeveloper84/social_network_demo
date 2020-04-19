import styles from "./users.module.css";
import logo from "../../assets/photos/no_person.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                                    <img src={ u.photos.small != null ? u.photos.small : logo } className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                { u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "413b2ce7-d766-46be-9f84-9ccd2f9adba6"
                                            }
                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        });
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null,{
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "413b2ce7-d766-46be-9f84-9ccd2f9adba6"
                                            }
                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        });
                                    }}>Follow</button> }
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
            }
            </div>
        </div>
    );
};

export default Users;
