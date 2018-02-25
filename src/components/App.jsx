import React from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';
import ReduxUpdateExample from './ReduxUpdateExample';
import '../styles/app.scss';

whyDidYouUpdate(React);

const App = () => (
  <div className="container">
    <ReduxUpdateExample />
  </div>
);

export default App;
