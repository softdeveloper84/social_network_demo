import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header />
              <Navbar friends={props.state.sidebar.friends}
                      navbarItemsData={props.state.sidebar.navbarItemsData}/>
              <div className="app-wrapper-content">
                  <Route path="/profile" render={() =>
                      <Profile store={props.store}/>
                  }/>
                  <Route path="/dialogs" render={() =>
                      <DialogsContainer store={props.store}/>
                  } />
                  <Route path="/news" component={() => <News/>}/>
                  <Route path="/music" component={() => <Music/>}/>
                  <Route path="/settings" component={() => <Settings/>}/>
              </div>
          </div>
  );
};

export default App;

