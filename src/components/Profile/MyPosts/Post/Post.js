import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            {props.name}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPkvACWnz5vSkASvYaGDyShRFoWJOwLBv8zsSdAen4TrUtE3Hq&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>like: {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;