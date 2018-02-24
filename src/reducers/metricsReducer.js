import { metricsActions } from '../constants/ActionTypes';

const initialState = {
  clickCount: 0,
};

export default function metricsReducer(state = initialState, action) {
  switch (action.type) {
    case metricsActions.INCREASE_CLICK_COUNT: {
      return {
        ...state,
        clickCount: state.clickCount + 1,
      };
    }
    case metricsActions.DECREASE_CLICK_COUNT: {
      return {
        ...state,
        clickCount: state.clickCount - 1,
      };
    }
    default: {
      return state;
    }
  }
}
