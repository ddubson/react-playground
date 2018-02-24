import React from 'react';
import { shallow } from 'enzyme';
import { ReduxUpdateExample } from '../../src/components/ReduxUpdateExample';

describe('ReduxUpdateExample', () => {
  const props = {
    metrics: { clickCount: 2 },
    actions: {
      increaseClickCount: jest.fn(),
      decreaseClickCount: jest.fn(),
    },
  };

  it('should display Hello text', () => {
    const wrapper = shallow(<ReduxUpdateExample
      {...props}
    />);

    expect(wrapper.find('[className="card-text"]').text()).toEqual('Click Count: 2');
  });
});
