import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Aside from "./components/aside/Aside.jsx";
import Main from "./components/main/Main.jsx";
// import Footer from './footer/'


const App = () => {
  return (
    <div className="App">
      <Header className="Header" />
      <Aside className="Aside" />
      <Main className="Main" />
    </div>
  );
}

export default App;
