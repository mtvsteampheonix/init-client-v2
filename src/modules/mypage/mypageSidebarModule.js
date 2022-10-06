import {createActions, handleActions} from 'redux-actions';
const initstate = [1, 0, 0, 0, 0];

export const SELECT_SIDEBAR = 'sidebar/SELECT_SIDEBAR';

const action = createActions({
  [SELECT_SIDEBAR]: () => {}
});

const myPageSidebarReducer = handleActions(
  {
    [SELECT_SIDEBAR]: (state, {payload}) => {
      let result = [0, 0, 0, 0, 0];
      result[payload] = 1;
      return [...result];
    }
  },
  initstate
);

export default myPageSidebarReducer;
