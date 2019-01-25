import * as React from 'react';
import '../CSS/Backdrop.css';




class Backdrop extends React.Component {
    render() {
      return(
            <div className='backdrop' onClick={this.props.click}></div>
        
      );

      
    }
  }


export default Backdrop;