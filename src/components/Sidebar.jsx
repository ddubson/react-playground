import React, { PureComponent } from 'react';

class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="active" id="sidebar">
        <div className="sidebar-header">
          <h2>React Playground</h2>
        </div>

        <ul className="list-unstyled components">
          <li className="active"><a href="http://localhost">Home</a></li>
          <li><a href="http://localhost">About</a></li>
          <li><a href="http://localhost">Portfolio</a></li>
          <li><a href="http://localhost">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
