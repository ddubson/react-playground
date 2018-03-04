import React from 'react';
import { shallow } from 'enzyme';
import { ReduxUpdateExample } from '../../src/components/ReduxUpdateExample';

describe('ReduxUpdateExample', () => {
  const props = overriddenProps => ({
    clickCount: 2,
    increaseClickCount: jest.fn(),
    decreaseClickCount: jest.fn(),
    ...overriddenProps,
  });

  it('should display Hello text', () => {
    const wrapper = shallow(<ReduxUpdateExample
      {...props({ clickCount: 12 })}
    />);

    expect(wrapper.find('[className="card-text"]').text()).toEqual('Click Count: 12');
  });
});
