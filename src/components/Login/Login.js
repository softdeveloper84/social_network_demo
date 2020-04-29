import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {CreateField, Input} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../../components/Common/FormsControls/FormControl.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit}>
        {CreateField(Input, 'Login', 'login', null, [requiredField, maxLength30])}
        {CreateField(Input, 'Password', 'password', 'password', [requiredField, maxLength30])}
        {CreateField(Input, null, 'rememberMe', 'checkbox', null, null, 'remember me')}
        {error && <div className={style.formSummaryControl}>{error}</div>}
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
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={props.onSubmit}/>
    </div>
};

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth
  }
};

export default compose(
    connect(mapStateToProps, {loginUser: login})
)(Login);
