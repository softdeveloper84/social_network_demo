import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Navbar friends={props.state.sidebar.friends}
                      navbarItemsData={props.state.navbarItemsData}/>
              <div className="app-wrapper-content">
                  <Route path="/profile" component={() =>
                      <Profile posts={props.state.profilePage.posts}
                               addPost={props.addPost}/>}/>
                  <Route path="/dialogs" component={() =>
                      <Dialogs dialogsData={props.state.dialogsPage.dialogs}
                               messageData={props.state.dialogsPage.messages}/>
                  } />
                  <Route path="/news" component={() => <News/>}/>
                  <Route path="/music" component={() => <Music/>}/>
                  <Route path="/settings" component={() => <Settings/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
};

export default App;

