import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import randomGreetingReducer from './greeting/reducer';

const reducers = combineReducers({
  randomGreeting: randomGreetingReducer,
});

const store = configureStore({
  reducer: reducers,
},
applyMiddleware(thunk));

export default store;
