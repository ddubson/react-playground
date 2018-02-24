import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const ReduxUpdateExample = ({ myVariables, actions }) => (
  <div className="card">
    <div className="card-header">
      Redux State Update Example
    </div>
    <div className="card-block">
      <h4 className="card-title">Updating Redux State</h4>
      <p className="card-text">Variable: {myVariables.myVar}</p>
      <p>
        <Button
          bsStyle="info"
          onClick={() => {
            actions.updateMyVar();
          }}
        >
          Click to update Redux state.
        </Button>
      </p>
    </div>
  </div>
);

ReduxUpdateExample.defaultProps = {
  actions: {
    updateMyVar: () => {
    },
  },
  myVariables: {
    myVar: '',
  },
};

ReduxUpdateExample.propTypes = {
  actions: PropTypes.shape({
    updateMyVar: PropTypes.func.isRequired,
  }),
  myVariables: PropTypes.shape({
    myVar: PropTypes.string,
  }),
};
