import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default class PureButton extends PureComponent {
  render() {
    return (
      <Button
        bsStyle={this.props.bsStyle}
        onClick={this.props.onClick}
      >{this.props.children}
      </Button>
    );
  }
}

PureButton.defaultProps = {
  bsStyle: '',
  onClick: () => {},
  children: '',
};

PureButton.propTypes = {
  bsStyle: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};
