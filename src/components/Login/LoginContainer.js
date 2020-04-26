import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {loginUser} from "../../redux/authReducer";


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

const mapStateToProps = (state) => {
    return {
        aaa: 12
    }
};


export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);

