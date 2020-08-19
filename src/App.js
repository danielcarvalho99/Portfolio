import React from 'react';
import Header from './Header'
import Main from './Main';
import Techs from './Techs';
import Projects from './Projects';
import Footer from './footer';
import './App.css'

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Techs />
    <Projects />
    <Footer/>
    </div>
  );
}

export default App;
