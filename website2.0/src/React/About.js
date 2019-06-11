import React from 'react';
import '../CSS/About.css';







const About = () => (
  
 <div className='about-div'>
    <div className='about-p-div'>
     <p className='about01'>
     <h2>About Me!</h2>
     In 2016 I finished college and obtained my bachelors degree in business. I was always interest in Technology so I decided to take a big risk and make a career change.  I applied to General Assembly for their Web Development Couse.<br/><br/>  I've learned many things from General Assembly but My biggest accomplisment was to take a leap of faith and make a career change.  It gave me confidence to do what I love which is creating things.
     <br/><br/>
        Recently, I have gotten a position as a Front End Developer at Errunds where I am working with the design team , CEO , back end developers to take their protoypes and wireframes and turn them into a fully functional website.  You can see my projects <a href='/projects'>Here</a> . 
     </p>
    </div>
    <div className='skills-p-div'>
        <p className='skills01'>
           <h2 className='skills-title'>Skills:</h2>
           <span>These are the languages, frameworks and tools that I am the most familiar with and what I use.</span><br/><br/>
           <p>HTML/CSS, Javascript, React, jQuery,ES5 & ES6, Express.js, Node.js, PostgreSQL, Ruby, Ruby on Rails, Unity, Git, Bitbucket</p>
           
           
            
        </p>
    </div>
 </div>
 
);

export default About;