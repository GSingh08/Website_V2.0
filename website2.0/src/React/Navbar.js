import React, { Component } from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
import Toolbar from '../React/Toolbar.js';
import SideDrawer from '../React/SideDrawer.js';
import Backdrop from '../React/Backdrop.js';


class Navbar extends Component {
  state = {
        sideDrawerOpen: false,
      };

  drawerToggleClickHandler = () => {
       this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
       });
     };
   backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false });
     };


    render() {
      let backdrop;
      if (this.state.sideDrawerOpen){
                    backdrop = <Backdrop click={this.backdropClickHandler}/>;
               }
      return (
       
        <div className='nav-div'>
             <div className='mobile-nav-div'>
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
          </div>
                  <ul>
                      <div className='nav-logo'>
                        <li><Link className='nav-logo' to="/"><i className="fab fa-gofore fa-4x"></i></Link></li>
                      </div> 
                      <div className='nav-link'>
                        <li><Link className='nav-link' to="/"><i className="fas fa-home fa-2x"></i></Link></li>
                        <li><Link className='nav-link' to="/About"><i className="fas fa-user-circle fa-2x"></i></Link></li>
                        <li><Link className='nav-link' to="/Projects"><i className="fas fa-book fa-2x"></i></Link></li>
                      </div>
                      <div className='bottom-nav-links'>
                        <li><a className='bottom-nav-links' href="https://github.com/gsingh08"><i className="fab fa-github fa-2x"></i></a></li>
                        <li><a className='bottom-nav-links'  href="https://www.linkedin.com/in/gurjot-singh-/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                        <li><a className='bottom-nav-links' href="mailto:gurjotssidhu08@gmail.com"><i className="fas fa-envelope fa-2x"></i></a></li>
                      </div>
                  </ul>         
        </div>
        
      )
    }
  }

export default Navbar;
