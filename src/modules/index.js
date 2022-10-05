import {combineReducers} from 'redux';
import authReducer from './authModule';
import applyListPersonalReducer from './match/applyListPersonalModule';

const rootReducer = combineReducers({authReducer, applyListPersonalReducer});

export default rootReducer;
