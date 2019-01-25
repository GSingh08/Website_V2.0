import * as React from 'react';
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
                <li className='side-drawer-li'><a href='/' className='side-drawer-a'>Home</a></li>
                <li className='side-drawer-li'><a href='/' className='side-drawer-a'>About</a> </li>
                <li className='side-drawer-li'><a href='/' className='side-drawer-a'>Contact</a></li>
                <li className='side-drawer-li'><a href='/' className='side-drawer-a'>Projects</a></li>
            </ul>
              
          </nav>
        
      );

      
    }
  }


export default SideDrawer;