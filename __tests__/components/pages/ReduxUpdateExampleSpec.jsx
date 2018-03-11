import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { ReduxUpdateExample } from '../../../src/components/pages/ReduxUpdateExample';
import ConnectedReduxUpdateExample from '../../../src/components/pages/ReduxUpdateExample';

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

describe('ConnectedReduxUpdateExample', () => {
  const mappedProps = {
    metrics: {
      clickCount: 5,
    },
  };
  const store = configureMockStore()(mappedProps);

  it('should map state to props', () => {
    const wrapper = shallow(<ConnectedReduxUpdateExample store={store} />);
    const { clickCount } = wrapper.props();
    expect(clickCount).toEqual(mappedProps.metrics.clickCount);
  });
});
