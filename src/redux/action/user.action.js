import { USERDATA } from "../Actiontype"

export const Users = (res) => {
    console.log(res);
    return async (dispatch) => {
        const respons = await fetch('https://dummyjson.com/users')
        const res = await respons.json();
        dispatch({
            type: USERDATA,
            payload: res.users
        })
    }
}   