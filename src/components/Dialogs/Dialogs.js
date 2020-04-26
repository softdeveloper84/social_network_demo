import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       placeholder={'New message'}
                       name={"message"}
                       validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({
    form: "add_message",
})(AddMessageForm);


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => (
        <DialogItem name={el.name} id={el.id} key={el.id}/>
    ));

    let messageElements = props.dialogsPage.messages.map(el => (
       <Message message={el.message} key={el.id}/>
    ));

    let onSubmit = (formData) => {
        props.sendMessage(formData.message);
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Dialogs;
