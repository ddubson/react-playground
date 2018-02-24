import React from 'react';
import PropTypes from 'prop-types';
import { ReduxUpdateExample } from './ReduxUpdateExample';

const MainSection = props => (
  <div className="container">
    <ReduxUpdateExample actions={props.actions} myVariables={props.myVariables} />
  </div>
);

export { MainSection as default };

MainSection.propTypes = {
  myVariables: PropTypes.shape({
    myVar: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    updateMyVar: PropTypes.func.isRequired,
  }).isRequired,
};

