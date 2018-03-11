import React, { PureComponent } from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ReduxUpdateExample from './pages/ReduxUpdateExample';
import { routes } from '../constants';
import Home from './pages/Home';

whyDidYouUpdate(React);

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar />

          <div className="container">
            <Route
              exact
              path={routes.HOME}
              component={Home}
            />
            <Route
              exact
              path={routes.STATE_UPDATE_EXAMPLE_ROUTE}
              component={ReduxUpdateExample}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
