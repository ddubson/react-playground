import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseClickCount, decreaseClickCount } from '../actions';
import PureButton from './PureButton';

export class ReduxUpdateExample extends PureComponent {
  render() {
    const { clickCount, increaseClickCount, decreaseClickCount } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          Redux State Update Example
        </div>
        <div className="card-block">
          <h4 className="card-title">Updating Redux State</h4>
          <p className="card-text">Click Count: {clickCount}</p>
          <p>
            <PureButton
              bsStyle="success"
              onClick={increaseClickCount}
            >
              +
            </PureButton>
            <PureButton
              bsStyle="warning"
              onClick={decreaseClickCount}
            >
              -
            </PureButton>
          </p>
        </div>
      </div>
    );
  }
}

ReduxUpdateExample.defaultProps = {
  clickCount: 0,
};

ReduxUpdateExample.propTypes = {
  increaseClickCount: PropTypes.func.isRequired,
  decreaseClickCount: PropTypes.func.isRequired,
  clickCount: PropTypes.number,
};

const mapStateToProps = state => ({
  clickCount: state.metrics.clickCount,
});

const mapDispatchToProps = {
  increaseClickCount,
  decreaseClickCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxUpdateExample);
