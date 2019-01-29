import React from 'react';
import '../CSS/Projects.css';
import project1 from '../CSS/pacman-image.png';

const Projects = () => (
 <div className='projects-div'>
 <p className='projects-header'><span className='project-header-title'>Projects:</span><br/><br/>
 These are the projects I have worked on / working on since the start of my computer scienece journey which started January 2018 up until now.</p> 
     <div className='project1'>
        <img src={project1} className='project1-img' alt="pacman"/>
        <h4 className='project1-title'>PacMan</h4>
        <p className='project1-desc'>For my first project I created an simpler version of the all time classic Pac-Man. This was created using Javascript, CSS and HTML.</p>
        <a href='https://laughing-minsky-9dd415.netlify.com/'>Website</a>
     </div>
     <div className='project2'>
        <img src={project1} className='project1-img' alt="pacman"/>
        <h4 className='project1-title'>Game Hub</h4>
        <p className='project1-desc'>Game-Hub was created using React and Ruby on Rails. This project is still in the works but for now, users can register and sign in. They are also able to view video games and favorite them if they wish.</p>
     </div>
     <div className='project3'>
        <img src={project1} className='project1-img' alt="pacman"/>
        <h4 className='project1-title'>Pokedex</h4>
        <p className='project1-desc'>This project was created in React and styled using CSS and it's a very simple website that shows a list of the original 151 Pokemon. Users are able to click on a Pokemon of their choosing and view their information just like the original Pokedex!</p>
     </div>
     <div className='project1'>
        <img src={project1} className='project1-img' alt="pacman"/>
        <h4 className='project1-title'>PacMan</h4>
        <p className='project1-desc'>For my first project I created an simpler version of the all time classic Pac-Man. This was created using Javascript, CSS and HTML.</p>
     </div>
 </div>
);

export default Projects;