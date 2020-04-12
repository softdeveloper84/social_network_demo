import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let dialogsElements = props.dialogsData.map(el => (
        <DialogItem name={el.name} id={el.id}/>
    ));

    let messageElements = props.messageData.map(el => (
       <Message message={el.name}/>
    ));

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;