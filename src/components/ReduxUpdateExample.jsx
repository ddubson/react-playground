import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const ReduxUpdateExample = ({ metrics, actions }) => (
  <div className="card">
    <div className="card-header">
      Redux State Update Example
    </div>
    <div className="card-block">
      <h4 className="card-title">Updating Redux State</h4>
      <p className="card-text">Click Count: {metrics.clickCount}</p>
      <p>
        <Button
          bsStyle="success"
          onClick={actions.increaseClickCount}
        >
          +
        </Button>
        <Button
          bsStyle="warning"
          onClick={actions.decreaseClickCount}
        >
          -
        </Button>
      </p>
    </div>
  </div>
);

ReduxUpdateExample.defaultProps = {
  actions: {
    increaseClickCount: () => {
    },
  },
  metrics: {
    clickCount: '',
  },
};

ReduxUpdateExample.propTypes = {
  actions: PropTypes.shape({
    increaseClickCount: PropTypes.func.isRequired,
    decreaseClickCount: PropTypes.func.isRequired,
  }),
  metrics: PropTypes.shape({
    clickCount: PropTypes.number,
  }),
};
