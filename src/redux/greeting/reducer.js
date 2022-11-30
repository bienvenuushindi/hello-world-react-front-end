import {FETCH_RANDOM_GREETING_FULFILLED} from "./action";

const randomGreetingReducer = (state = [], action= {}) => {
     switch (action.type) {
         case FETCH_RANDOM_GREETING_FULFILLED: {
             return action.payload
         }
         default:
             return state
     }
}

export default randomGreetingReducer