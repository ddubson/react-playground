import React, { PureComponent } from 'react';

class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="active" id="sidebar">
        <div className="sidebar-header">
          <h2>React Playground</h2>
        </div>

        <ul className="list-unstyled components">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
