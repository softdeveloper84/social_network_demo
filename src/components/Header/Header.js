import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <img src="https://www.kindpng.com/picc/m/225-2254548_instagram-social-network-logo-of-photo-camera-ig.png" alt=""/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    );
};

export default Header;
