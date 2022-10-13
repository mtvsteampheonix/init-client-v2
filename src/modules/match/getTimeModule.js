import {handleActions} from 'redux-actions';

const time = '';

export const TIME = 'time';

const getTimeReducer = handleActions(
  {
    [TIME]: (state, {payload}) => state
  },
  time
);

export default getTimeReducer;
