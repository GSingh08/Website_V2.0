import * as React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/SideDrawer.css';




class SideDrawer extends React.Component {
    render() {
        let drawerClasses = ['side-drawer'];
        if(this.props.show){
            drawerClasses = 'side-drawer open';
        }
      return(
        
          <nav className={drawerClasses}>
            <ul className='side-drawer-ul'>
                        <li className='side-drawer-li'><Link className='side-drawer-a' to="/"><i className="fab fa-gofore fa-4x"></i></Link></li>
                        <li className='side-drawer-li'><Link className='side-drawer-a' to="/">Home</Link></li>
                        <li className='side-drawer-li'><Link className='side-drawer-a' to="/about">About</Link></li>
                        <li className='side-drawer-li'><Link className='side-drawer-a' to="/projects">Projects</Link></li>
                        <li className='side-drawer-li'><a className='side-drawer-a' href="https://github.com/gsingh08">Github</a></li>
                        <li className='side-drawer-li'><a className='side-drawer-a' href="https://www.linkedin.com/in/gurjot-singh-/">LinkedIn</a></li>
                        <li className='side-drawer-li'><a className='side-drawer-a' href="mailto:gurjotssidhu08@gmail.com">My Email</a></li>
            </ul>
              
          </nav>
        
      );

      
    }
  }


export default SideDrawer;