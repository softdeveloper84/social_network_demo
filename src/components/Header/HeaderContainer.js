import React from 'react';
import Header from "./Header";
import s from "./Header.module.css";
import {logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";


class HeaderContainer extends React.Component{
    render() {
        return (
            <header className={s.header}>
                <Header { ...this.props }/>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
   return {
       login: state.auth.login,
       isAuth: state.auth.isAuth,
   }
};

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer);
