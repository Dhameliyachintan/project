import { ADD_ORDER, DELETEORDER, EDITORDER } from "../Actiontype"


export const addorder = (data) => {
    return {
        type: ADD_ORDER,
        payload : data
    }
}
export const deleteorder = (id) => {
    return {
        type: DELETEORDER,
        payload : id
    }
}
