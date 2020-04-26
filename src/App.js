import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


const App = (props) => {
  return (
          <div className="app-wrapper">
              <HeaderContainer/>
              <NavbarContainer/>
              <div className="app-wrapper-content">
                  <Route path="/profile/:userId?" render={() =>
                      <ProfileContainer/>
                  } />
                  <Route path="/dialogs" render={() =>
                      <DialogsContainer/>
                  } />
                  <Route path="/users" render={() =>
                      <UsersContainer/>
                  } />
                  <Route path="/news" component={() => <News/>}/>
                  <Route path="/music" component={() => <Music/>}/>
                  <Route path="/settings" component={() => <Settings/>}/>
                  <Route path="/login" component={() => <LoginContainer/>}/>
              </div>
          </div>
  );
};

export default App;

