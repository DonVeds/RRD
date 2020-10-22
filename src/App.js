import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Aside from "./components/aside/Aside.jsx";
import Main from "./components/main/Main.jsx";
// import Footer from './footer/'
import { BrowserRouter } from "react-router-dom";


const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Aside className="Aside" />
        <div className = "Page">
          <Header className="Header" />
          <Main
            className="Main"
            state={props.state}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;