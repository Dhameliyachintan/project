import { ADD_ORDER, DELETEORDER, UPDATEORDER } from "../Actiontype"


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

export const updateorder = (data) => {
    return {
        type:   UPDATEORDER,
        payload : data
    }
}
