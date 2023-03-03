import { ADD_ORDER } from "../Actiontype"


export const getorder = (data) => {
    return {
        type: ADD_ORDER,
        payload : data
    }
}