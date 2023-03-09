import React, { useReducer } from 'react';

function UseReducer(props) {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') {
            return { ...state, count: state.count + 1 }
        }

        if (action.type === 'DECREMENT') {
            return { ...state, count: state.count === 0 ? state.count: state.count - 1 }
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("state++", state)

    const onclickincrement = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const onclickdecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div>
            <button onClick={onclickincrement}>onclickincrement</button>
            {state.count}
            <button onClick={onclickdecrement}>onclickdecrement</button>
        </div>
    );
}

export default UseReducer;