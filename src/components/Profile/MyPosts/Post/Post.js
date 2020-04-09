import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPkvACWnz5vSkASvYaGDyShRFoWJOwLBv8zsSdAen4TrUtE3Hq&usqp=CAU" alt=""/>
            Post text
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;