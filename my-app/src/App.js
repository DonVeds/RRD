import React from 'react';
import './App.css';
import Header from './header/Header.jsx'
import Aside from './aside/Aside.jsx'
import Main from './main/Main.jsx'
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
