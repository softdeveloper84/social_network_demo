import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from "react";


const state = {
    posts: [
        {id:1, name: "Alex", message: "Hi", likeCont: 10},
        {id:2, name: "Lexus", message: "Hahaha", likeCont: 42},
    ],
};

test('length of posts should be incremented', () => {
    const action = addPost("Test message");
    let new_state = profileReducer(state, action);
    expect(new_state.posts.length).toBe(3);
});

test('message should be "Test message"', () => {
    const action = addPost("Test message");
    let new_state = profileReducer(state, action);
    expect(new_state.posts[2].message).toBe("Test message");
});

test('after deleting length should be decrement', () => {
    const action = deletePost(2);
    let new_state = profileReducer(state, action);
    expect(new_state.posts.length).toBe(1);
});

test('after deleting length should not be changed if id is incorrect', () => {
    const action = deletePost(2900);
    let new_state = profileReducer(state, action);
    expect(new_state.posts.length).toBe(2);
});

test('likes count must be 9', () => {
    const action = addPost("Test message");
    let new_state = profileReducer(state, action);
    expect(new_state.posts[2].likeCont).toBe(9);
});
