import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div className={s.content}>
          <div>
              my posts
              <div>
                  New posts
              </div>
              <div className={s.posts}>
                  <Post name="Alex" message="Hi!" likes="15"/>
                  <Post name="Valera" message="It is my first post!" likes="29"/>
              </div>
          </div>
      </div>
  );
};

export default MyPosts;