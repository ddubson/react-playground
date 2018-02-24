import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import MainSection from '../components/MainSection';

const App = ({ metrics, actions }) => (
  <MainSection metrics={metrics} actions={actions} />
);

const mapStateToProps = state => ({
  metrics: state.metrics,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  metrics: PropTypes.shape({
    clickCount: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    increaseClickCount: PropTypes.func.isRequired,
    decreaseClickCount: PropTypes.func.isRequired,
  }).isRequired,
};
