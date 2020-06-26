import React from 'react';
import s from './Music.module.css';

class Music extends React.Component{
    componentWillMount(){
        console.log("Music mount");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Music receive props");
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Music will update");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Music did update");
    }

    componentDidMount() {
        console.log("Music did mount");
    }

    componentWillUnmount() {
        console.log("Music will unmount");
    }

    componentDidCatch(error, errorInfo) {
        console.log("Music did catch");
    }

    render() {
        return (
            <div>
                <h1>Music page!!</h1>
            </div>
        )
    }

}

export default Music;
