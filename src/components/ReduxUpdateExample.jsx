import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureButton from './PureButton';
import { increaseClickCount, decreaseClickCount } from '../actions';

export class ReduxUpdateExample extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Redux State Update Example
        </div>
        <div className="card-block">
          <h4 className="card-title">Updating Redux State</h4>
          <p className="card-text">Click Count: {this.props.clickCount}</p>
          <p>
            <PureButton
              bsStyle="success"
              onClick={this.props.increaseClickCount}
            >
              +
            </PureButton>
            <PureButton
              bsStyle="warning"
              onClick={this.props.decreaseClickCount}
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
