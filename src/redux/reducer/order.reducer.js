import { ADD_ORDER, DELETEORDER, EDITORDER } from "../Actiontype"


const initialState = {
    order: [],
}
const Orderreducer = (state = initialState, action) => {
    if (action.type === ADD_ORDER) {
        return { ...state, order: [...state.order, action.payload] }
    }

    if (action.type === DELETEORDER) {
        const filter = state.order.filter((i) => i.id !== action.payload)
        return { ...state, order: filter }
    }

    return state
}

export default Orderreducer