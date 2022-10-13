import {combineReducers} from 'redux';
import signupReducer from './auths/signupModule';
import applyListDetailPersonalReducer from './match/applyListDetailPersonalModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import suggestionListPersonalReducer from './match/suggestionListPersonalModule';
import suggestionListDetailPersonalReducer from './match/suggestionListDetailPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';
import editPersonalMemberReducer from './members/editPersonalMemberModule';
import resumeMainFormReducer from './resume/resumeFormModule';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {resumeCombineReducer} from './resume/addStepModule';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['resumeCombineReducer']
};

export const rootReducer = combineReducers({
  signupReducer,
  applyListPersonalReducer,
  myPageSidebarReducer,
  applyListDetailPersonalReducer,
  suggestionListPersonalReducer,
  suggestionListDetailPersonalReducer,
  editPersonalMemberReducer,
  resumeMainFormReducer,
  resumeCombineReducer
});

export default persistReducer(persistConfig, rootReducer);
