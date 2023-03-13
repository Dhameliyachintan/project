import React, { useMemo, useState } from 'react';
import Firstchild from './Firstchild';

function Usememo(props) {
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(0)
    const incremenent = () => {
        setcount(count + 1)
    }
    const decremenent = () => {
        setcount2(count2 - 1)
    }

    const multiplication = useMemo(() => {
        console.log("multiplication run")
        return count * 100
    },[count])

    return (
        <div>
            <Firstchild />
            <button onClick={incremenent}>incremenent</button>
            {multiplication}
            <button onClick={decremenent}>decremenent</button>
        </div>
    );
}

export default Usememo;