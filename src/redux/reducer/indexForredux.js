import { combineReducers } from "redux";
import orderReducer from './order.reducer'
import userReducer from "./user.reducer";


const rootReducer = combineReducers({
      orderReducer,
      userReducer
})

export default rootReducer