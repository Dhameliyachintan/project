import React, { useState } from 'react';

function State(props) {
    const [value, setValue] = useState('')

    const onChange = (event) => {
         const newvalue = event.target.value;
         setValue(newvalue)
    }
    return (
        <div>
           <input type="text"  placeholder='enter something....' onChange={onChange}/>
           <p>{value}</p>
        </div>
    );
}

export default State;