import React, { Component } from 'react';
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
          <br/>
          <span><button className='learn-more-btn'>Learn More</button></span>
          <span><button className='contact-me-btn'>Contact Me</button></span>
          </div>
        </div>
      )
    }
  }

export default Main;