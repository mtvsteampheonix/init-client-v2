import {combineReducers} from 'redux';
import applyListDetailPersonalReducer from './match/applyListDetailPersonalModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import suggestionListPersonalReducer from './match/suggestionListPersonalModule';
import suggestionListDetailPersonalReducer from './match/suggestionListDetailPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';
import resumeMainFormReducer from './resume/resumeFormModule';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {resumeCombineReducer} from './resume/addStepModule';

import editMemberReducer from './members/editMemberModule';
import signupReducer from './auths/signupModule';
import registNoticeReducer from './jobsearch/RegistNoticeModule';
import MyNoticeIdReducer from './jobsearch/MyNoticeIdModule';
import signupplzReducer from './admins/signupplzReducer';
import applyListCompanyReducer from './match/applyListCompanyModule';
import applyListDetailCompanyReducer from './match/applyListDetailCompanyModule';
import companyInformationReducer from './match/companyInformationModule';

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
  resumeMainFormReducer,
  resumeCombineReducer,
  registNoticeReducer,
  MyNoticeIdReducer,
  editMemberReducer,
  signupplzReducer,
  applyListCompanyReducer,
  applyListDetailCompanyReducer,
  companyInformationReducer
});

export default persistReducer(persistConfig, rootReducer);
