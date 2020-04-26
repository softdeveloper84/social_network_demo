import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={"input"} placeholder={'Login'} name={"login"}/>
        </div>
        <div>
          <Field component={"input"} type={"password"} placeholder={'Password'} name={"password"}/>
        </div>
        <div>
          <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remeber me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={props.onSubmit}/>
  </div>
};

const mapStateToProps = (state) => {
  return {}
};

export default compose(
    connect(mapStateToProps, {loginUser})
)(Login);
