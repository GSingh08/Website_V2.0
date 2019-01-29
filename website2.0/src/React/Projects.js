import React from 'react';
import '../CSS/Projects.css';
import project1 from '../CSS/pacman-image.png';
import project2 from '../CSS/game-hub.png';
import project3 from '../CSS/pokedex.png';
import project4 from '../CSS/rps-game.png';


const Projects = () => (
 <div className='projects-div'>
 <p className='projects-header'><span className='project-header-title'>Projects:</span><br/><br/>
 These are the projects I have worked on / working on since the start of my computer scienece journey which started January 2018 up until now.</p> 
     <div className='project1'>
        <img src={project1} className='project1-img' alt="pacman"/>
        <h4 className='project1-title'>PacMan</h4>
        <p className='project1-desc'>For my first project I created an simpler version of the all time classic Pac-Man. This was created using Javascript, CSS and HTML.</p>
        <a href='https://laughing-minsky-9dd415.netlify.com/' className='website-a'>Website </a>
        <a href='https://github.com/GSingh08/Pac_Man' className='website-a'>  Github</a>
              
     </div>
     <div className='project2'>
        <img src={project2} className='project2-img' alt="GameHub"/>
        <h4 className='project2-title'>Game Hub</h4>
        <p className='project2-desc'>Game-Hub was created using React and Ruby on Rails. This project is still in the works but for now, users can register and sign in. They are also able to view video games and favorite them if they wish.</p>
        <a href='https://warm-sands-73071.herokuapp.com/' className='website-a'>Website </a>
        <a href='https://github.com/GSingh08/Game-Hub' className='website-a'>  Github</a>
     </div>
     <div className='project3'>
        <img src={project3} className='project3-img' alt="pokedex"/>
        <h4 className='project3-title'>Pokedex</h4>
        <p className='project3-desc'>This project was created in React and styled using CSS and it's a very simple website that shows a list of the original 151 Pokemon.</p>
        <a href='https://poke-dex.netlify.com/' className='website-a'>Website </a>
        <a href='https://github.com/GSingh08/Pokedex' className='website-a'>  Github</a>
     </div>
     <div className='project4'>
        <img src={project4} className='project1-img' alt="Rock-Paper-Scissors"/>
        <h4 className='project4-title'>Rock Paper Scissors</h4>
        <p className='project4-desc'>A simple Rock Paper Scissors game created using HTML/ CSS and Javascript</p>
        <a href='https://rock-paper-scissors-gurjot.netlify.com/' className='website-a'>Website </a>
        <a href='https://github.com/GSingh08/Rock-Paper-Scissors' className='website-a'>  Github</a>
     </div>
 </div>
);

export default Projects;