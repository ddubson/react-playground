import React from 'react';
import { shallow } from 'enzyme';
import { ReduxUpdateExample } from '../../src/components/ReduxUpdateExample';

describe('ReduxUpdateExample', () => {
  it('should display Hello text', () => {
    const wrapper = shallow(<ReduxUpdateExample
      myVariables={{ myVar: 'Hello' }}
      actions={{ updateMyVar: jest.fn() }}
    />);

    expect(wrapper.contains('Hello')).toBe(true);
  });
});
