import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="active" id="sidebar">
        <div className="sidebar-header">
          <h2>React Playground</h2>
        </div>

        <ul className="list-unstyled components">
          <Link to={routes.HOME}>
            <li>Home</li>
          </Link>
          <Link to={routes.STATE_UPDATE_EXAMPLE_ROUTE}>
            <li>State Update Example</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
