import * as React from "react";
import '../CSS/Toolbar.css';

import DrawerButton from "../React/DrawerButton";


class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div>
            <DrawerButton click={this.props.drawerClickHandler} />
          </div>

          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul className="toolbar-ul" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
