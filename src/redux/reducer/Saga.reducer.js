const intaialstate = {
    data: []
}

const Sagareducer = (state = intaialstate, action) => {
    console.log(action.payload);
    if (action.type === 'GET_USERDATA') {
        return { ...state, data: action.payload }
    }

    return state
}

export default Sagareducer