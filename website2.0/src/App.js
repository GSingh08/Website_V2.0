import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <About />
      <Footer />
      
      </div>
    )
  }
}

export default App;
