import {combineReducers} from 'redux';
import signupReducer from './signupModule';

const rootReducer = combineReducers({signupReducer});

export default rootReducer;
