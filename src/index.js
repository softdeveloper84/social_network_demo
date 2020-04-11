import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData =
    [
        {id: 1, name: "Valera"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Anastasia"},
        {id: 4, name: "Gregor"},
        {id: 5, name: "Vicktor"},
    ];

let messagesData = [
    {id:1, "name": "Hello"},
    {id:2, "name": "How are you, bro?"},
    {id:3, "name": "thanks bro, i am fine"},
];

let posts = [
    {id:1, name: "Alex", message: "Hi", likeCont: 12},
    {id:2, name: "Ivan", message: "My first post", likeCont: 1},
    {id:3, name: "Ivan", message: "Second post", likeCont: 121},
];

ReactDOM.render(
    <App dialogsData={dialogsData}
         messageData={messagesData}
         posts={posts}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
