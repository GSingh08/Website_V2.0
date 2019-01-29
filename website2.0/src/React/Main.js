import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Main.css';





class Main extends Component {
    render() {
      return (
        <div className='mp-div'>
          <div className='mp-text-div'>
          <br/>
          <br/>
          <br/>
            <span className='mp-txt'>Hey!</span><br/>
            <span className='mp-txt'>I'm Gurjot,</span><br/>
            <span className='mp-txt'>And I'm a Web Developer</span>
          </div>
          <br/>
          <div className='mp-info-div'>
          <span className='mp-info-text'>I'm a Front-End Developer</span>
          <br/>
          <span className='mp-info-text'>Who Specializes in</span>
          <br/>
          <span className='mp-info-text'>HTML/CSS, JavaScript, React</span>
          <br/><br/>
              <Link to='/About'className='mp-learn-link' >Learn More</Link>
              <Link to='/Contact' className='mp-contact-link'>Contact Me</Link>
            
          
          </div>
        </div>
      )
    }
  }

export default Main;