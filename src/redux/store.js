import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import randomGreetingReducer from "./greeting/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    randomGreeting: randomGreetingReducer
})

const store = configureStore({
        reducer: reducers,
    },
    applyMiddleware(thunk))

export default store