import styles from "./users.module.css";
import logo from "../../assets/photos/no_person.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>{pages.map(p => (
                <button className={ props.currentPage === p && styles.selectedPage }
                        onClick={(e) => props.onPageChanged(p)}>{p}</button>
            ))}
            </div>
            {
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
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button> }
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
    );
};

export default Users;
