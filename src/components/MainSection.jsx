import React from 'react';
import PropTypes from 'prop-types';
import { ReduxUpdateExample } from './ReduxUpdateExample';

const MainSection = props => (
  <div className="container">
    <ReduxUpdateExample actions={props.actions} metrics={props.metrics} />
  </div>
);

export { MainSection as default };

MainSection.propTypes = {
  metrics: PropTypes.shape({
    clickCount: PropTypes.number.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    increaseClickCount: PropTypes.func.isRequired,
    decreaseClickCount: PropTypes.func.isRequired,
  }).isRequired,
};

