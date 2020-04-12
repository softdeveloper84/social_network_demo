import React from "react";
import s from './FriendList.module.css';


const FriendList = (props) => {
    let friends = props.friends.map(el => <span>
        <img src={el.img} alt=""/>
        <div>{el.name}</div>
    </span>);

    return(
        <div className={s.container}>
            <div className={s.title}>
                Friends
            </div>
            {friends}
        </div>
    );
};

export default FriendList;