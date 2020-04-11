import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="40" rows="2"></textarea>
                </div>
                <div>
                    <button>Add block</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post name="Alex" message="Hi!" likes="15"/>
                <Post name="Valera" message="It is my first post!" likes="29"/>
            </div>

        </div>
    );
};

export default MyPosts;