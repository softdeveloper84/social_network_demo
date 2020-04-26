import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/authReducer";


class LoginContainer extends React.Component{

    onSubmit = (formData) => {
        this.props.loginUser(formData.login, formData.password, formData.rememberMe);
    };

    render() {
        return (
            <Login onSubmit={this.onSubmit}/>
        );
    }
}

export default compose(
    connect(null, {loginUser: login})
)(LoginContainer);

