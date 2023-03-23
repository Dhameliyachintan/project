import { combineReducers } from "redux";
import orderReducer from './order.reducer'
import userReducer from "./user.reducer";
import Sagareducer from "./Saga.reducer";


const rootReducer = combineReducers({
      orderReducer,
      userReducer,
      Sagareducer
})

export default rootReducer