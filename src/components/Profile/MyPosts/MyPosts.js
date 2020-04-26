import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       placeholder={"Input new post"}
                       name={"message"}
                       validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <button>Publish new post</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({
    form: "post_form"
})(PostForm);


const MyPosts = (props) => {
    let postsElements = props.posts.map(el => (
       <Post key={el.id} name={el.name} message={el.message} likes={el.likeCont}/>
    ));

    let onSubmit = (formData) => {
        debugger
        props.addPost(formData.message);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
