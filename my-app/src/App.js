import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Aside from "./components/aside/Aside.jsx";
import Main from "./components/main/Main.jsx";
// import Footer from './footer/'
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="Header" />
        <Aside className="Aside" />
        <Main className="Main" />
      </BrowserRouter>
    </div>
  );
}

export default App;
