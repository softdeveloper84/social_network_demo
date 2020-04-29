import React from "react";
import styles from "./FormControl.module.css";
import {Field} from "redux-form";


const FormControl = ({input, meta : {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const CreateField = (component, placeholder, name, type, validators, props={}, text="") => (
    <div>
        <Field component={component}
               placeholder={placeholder}
               name={name}
               type={type}
               validate={validators}
               {...props}
        /> {text}
    </div>
);
