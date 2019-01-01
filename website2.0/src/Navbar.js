import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a class="active" href="#home">Contact Me</a></li>
                <li><a href="#news">Resume</a></li>
                <li><a href="#contact">Projects</a></li>
                <li><a href="#about">About Me</a></li>
            </ul>
        </nav>
      )
    }
  }

export default Navbar;
