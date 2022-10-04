import {handleActions} from 'redux-actions';

const initstate = {};

export const LOGIN = 'auth/LOGIN';

const authReducer = handleActions(
  {
    [LOGIN]: (state, {payload}) => payload
  },
  initstate
);

export default authReducer;
