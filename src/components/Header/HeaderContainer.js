import React from 'react';
import Header from "./Header";
import s from "./Header.module.css";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authMe} from "../../api/api";


class HeaderContainer extends React.Component{
    componentDidMount() {
        authMe().then(data => {
            if(data.resultCode === 0){
                const userId = data.data.id;
                const email = data.data.email;
                const login = data.data.login;
                this.props.setAuthUserData(userId, email, login);
            }
        });
    }

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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
