import { metricsActions } from '../constants/ActionTypes';

const increaseClickCount =
  () => ({ type: metricsActions.INCREASE_CLICK_COUNT });
const decreaseClickCount =
  () => ({ type: metricsActions.DECREASE_CLICK_COUNT });

export { increaseClickCount, decreaseClickCount };
