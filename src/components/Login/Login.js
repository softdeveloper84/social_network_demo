import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Input} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../../components/Common/FormsControls/FormControl.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    debugger
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input}
                 placeholder={'Login'}
                 name={"login"}
                 validate={[requiredField, maxLength30]}/>
        </div>
        <div>
          <Field component={Input}
                 type={"password"}
                 placeholder={'Password'}
                 name={"password"}
                 validate={[requiredField, maxLength30]}/>
        </div>
        <div>
            <Field component={Input}
                 type={"checkbox"}
                 name={"rememberMe"}/> remeber me
        </div>
        {props.error && <div className={style.formSummaryControl}>{props.error}</div>}
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
