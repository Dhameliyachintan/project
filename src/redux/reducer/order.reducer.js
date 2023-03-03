import { ADD_ORDER } from "../Actiontype"


const initialState = {
    order: [],
}
const Orderreducer = (state = initialState, action) => {
    if (action.type === ADD_ORDER) {
        return { ...state, order: [...state.order, action.payload] }
    }
    return state
}

export default Orderreducer