import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import ReduxUpdateExample from '../../src/components/pages/ReduxUpdateExample';

describe('App', () => {
  it('should path to State Update Example', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Route[path="/examples/state-update"]').props().component)
      .toEqual(ReduxUpdateExample);
  });
});
