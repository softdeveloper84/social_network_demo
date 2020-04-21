import React from 'react';
import s from './Post.module.css';
import noPersonlogo from '../../../../assets/images/no_person.jpeg'

const Post = (props) => {
    return (
        <div className={s.item}>
            {props.name}
            <img src={noPersonlogo} alt=""/>
            <div>
                {props.message}
            </div>
            <div>
                <span>like: {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;
