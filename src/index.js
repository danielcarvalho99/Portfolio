import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import Techs from './Techs';
import Projects from './Projects';
import Footer from './footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
    <Techs />
    <Projects />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

