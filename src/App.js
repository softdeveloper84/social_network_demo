import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header />
              <Navbar friends={props.state.sidebar.friends}
                      navbarItemsData={props.state.navbarItemsData}/>
              <div className="app-wrapper-content">
                  <Route path="/profile" render={() =>
                      <Profile profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>
                  <Route path="/dialogs" render={() =>
                      <Dialogs store={props.store}/>
                  } />
                  <Route path="/news" component={() => <News/>}/>
                  <Route path="/music" component={() => <Music/>}/>
                  <Route path="/settings" component={() => <Settings/>}/>
              </div>
          </div>
  );
};

export default App;

