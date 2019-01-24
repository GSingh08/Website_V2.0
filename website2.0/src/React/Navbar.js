import React, { Component } from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
      return (
        <div className='nav-div'>
            <ul>
              <div className='nav-logo'>
                <li><Link className='nav-logo' to="/">Logo</Link></li>
              </div>
              
              <div className='nav-link'>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li><Link className='nav-link' to="/About">About</Link></li>
                <li><Link className='nav-link' to="/Project">Projects</Link></li>
                <li><Link className='nav-link' to="/Contact">Contact</Link></li>
              </div>
                <div className='bottom-nav-links'>
                <li><a className='bottom-nav-links' href="https://github.com/gsingh08">Github</a></li>
                <li><a className='bottom-nav-links' href="https://www.linkedin.com/in/gurjot-singh-/">LinkedIn</a></li>
                <li><a className='bottom-nav-links' href="mailto:gurjotssidhu08@gmail.com">Email</a></li>
                </div>
            </ul>         
        </div>
      )
    }
  }

export default Navbar;
