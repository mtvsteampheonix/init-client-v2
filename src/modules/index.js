import {combineReducers} from 'redux';
import authReducer from './authModule';

const rootReducer = combineReducers({authReducer});

export default rootReducer;
