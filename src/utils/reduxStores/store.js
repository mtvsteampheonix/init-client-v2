import {applyMiddleware, createStore} from 'redux';
import ReduxThunx from 'redux-thunk';
import rootReducer from '../../modules';

const store = createStore(rootReducer, applyMiddleware(ReduxThunx));

export default store;
