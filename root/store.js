import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const appReducer = combineReducers(require('../src/redux/reducers').default)
const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
