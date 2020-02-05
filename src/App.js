import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Music from './components/Music'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      {/* <hr/> */}
      <Music/>
      {/* <hr/> */}
      <Contact/>
    </div>
  );
}

export default App;
