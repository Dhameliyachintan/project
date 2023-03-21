import { USERDATA } from "../Actiontype"

const initialState = {
    user: [],
}
const userReducer = (state = initialState, action) => {
    if (action.type === USERDATA) {
        return { ...state, user: action.payload }
    }

    return state
}

export default userReducer