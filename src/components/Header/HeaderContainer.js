import React from 'react';
import Header from "./Header";
import s from "./Header.module.css";
import axios from 'axios';
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                const userId = response.data.data.id;
                const email = response.data.data.email;
                const login = response.data.data.login;
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
