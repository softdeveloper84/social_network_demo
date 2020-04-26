import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import {Input} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
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
