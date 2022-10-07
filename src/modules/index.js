import {combineReducers} from 'redux';
import signupModule from './auths/signupModule';
import applyListDetailPersonalReducer from './match/applyListDetailPersonalModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';

const rootReducer = combineReducers({
  signupModule,
  applyListPersonalReducer,
  myPageSidebarReducer,
  applyListDetailPersonalReducer
});

export default rootReducer;
