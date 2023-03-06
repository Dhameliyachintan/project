import { ADD_ORDER, DELETEORDER,UPDATEORDER } from "../Actiontype"


const initialState = {
    order: [],
}
const orderReducer = (state = initialState, action) => {
    if (action.type === ADD_ORDER) {
        return { ...state, order: [...state.order, action.payload] }
    }

    if (action.type === DELETEORDER) {
        const filter = state.order.filter((i) => i.id !== action.payload)
        return { ...state, order: filter }
    }

    if (action.type === UPDATEORDER) {
        const filter = state.order.map((i) => {
            if (i.id == action.payload.id) {
                i = action.payload
            }
            return i
        })
        return {...state , order : filter}
    }

    return state
}

export default orderReducer