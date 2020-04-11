import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Valera</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">Anastasia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Gregory</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Ivan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I am fine, thanks</div>
            </div>
        </div>
    );
};

export default Dialogs;