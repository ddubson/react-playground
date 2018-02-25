import React from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';
import ReduxUpdateExample from './ReduxUpdateExample';
import '../styles/app.scss';
import '../styles/sidebar.scss';
import Sidebar from './Sidebar';

whyDidYouUpdate(React);

const App = () => (
  <div className="wrapper">
    <Sidebar />

    <div className="container">
      <ReduxUpdateExample />
    </div>
  </div>
);

export default App;
