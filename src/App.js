import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import {withSuspend} from "./hoc/withSuspense";

// const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>
                    }/>
                    <Route path="/dialogs" render={withSuspend(DialogsContainer)}/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>
                    }/>
                    <Route path="/news" component={() => <News/>}/>
                    <Route path="/music" component={() => <Music/>}/>
                    <Route path="/settings" component={() => <Settings/>}/>
                    <Route path="/login" component={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialNetworkApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialNetworkApp;
