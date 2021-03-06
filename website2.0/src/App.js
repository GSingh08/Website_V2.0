import React, { Component } from 'react';
import './CSS/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from './React/Main.js';
import About from './React/About.js';
import Resume from './React/Resume.js';
import Navbar from './React/Navbar.js';
import Projects from './React/Projects.js';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className='main-div'>
          <Navbar/>
          <Route exact={true} path='/' component={Main}/>
          <Route exact={true} path='/About' component={About}/>
          <Route exact={true} path='/Resume' component={Resume}/>
          <Route exact={true} path='/Projects' component={Projects}/>
        </div>
      </Router>
    )
  }
}

export default App;
