import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  it('should render ReduxUpdateExample', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Connect(ReduxUpdateExample)').length).toBe(1);
  });
});
