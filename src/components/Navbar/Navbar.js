import React from 'react';
import s from './Navbar.module.css'
import FriendList from "../Friends/FriendList/FriendList";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
    let navbarItemList = props.navbarItemsData.map(el => (
        <NavbarItem key={el.id} path={el.path} title={el.title}/>
    ));
    return (
        <div>
            <nav className={s.nav}>
                <div>
                    {navbarItemList}
                </div>
                {/*<div className={s.sidebar}>*/}
                {/*    <FriendList friends={props.friends}/>*/}
                {/*</div>*/}
            </nav>
        </div>
    );
};

export default Navbar;


