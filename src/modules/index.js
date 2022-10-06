import {combineReducers} from 'redux';
import authReducer from './authModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';

const rootReducer = combineReducers({
  authReducer,
  applyListPersonalReducer,
  myPageSidebarReducer
});

export default rootReducer;
