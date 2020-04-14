import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        navbarItemsData: state.sidebar.navbarItemsData,
        friends: state.sidebar.friends
    }
};

let matDispatchToProps = (dispatch) => {
    return {
    }
};

const NavbarContainer = connect(mapStateToProps, matDispatchToProps)(Navbar);

export default NavbarContainer;


