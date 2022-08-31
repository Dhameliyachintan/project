// import React, { useState } from 'react';

// function Counter(props) {
//     const [temperatuesValue, setTemperatuesValue] = useState(0)
//     const [temperatuesColor, setTemperatuesColor] = useState("cold")
//     const [showtext, setShowtext] = useState(true)

//     const increment = () => {
//         const newtemper = temperatuesValue + 1

//         if (newtemper > 15) {
//             setTemperatuesColor("hot")
//         }

//         setTemperatuesValue(newtemper)
//         setShowtext(!showtext)

//     }

//     const decrement = () => {
//         const newtemper = temperatuesValue - 1
//         if (newtemper < 15) {
//             setTemperatuesColor("cold")
//         }
//         setTemperatuesValue(newtemper)
//         setShowtext(!showtext)
//     }

//     return (
//         <div className='app-container'>
//             <div className="display-container">
//                 <div className={`temperatue ${temperatuesColor}`}>{temperatuesValue}* C</div>
//             </div>
//             <div className='button-container'>
//                 <button onClick={() => increment()}>+</button>
//                 <button onClick={() => decrement()}>-</button>
//                 {showtext && <p>This text</p>}
//             </div>
//         </div>
//     );
// }

// export default Counter;

import React, { useState } from 'react';

function Counter(props) {
    const [temperatuesValue, setTemperatuesValue] = useState(0)
    const [temperatuesColor, setTemperatuesColor] = useState("cold")
    const [showtext, setShowtext] = useState(true)

    const increment = () => {
        const newtemper = temperatuesValue + 1

        if (newtemper > 15) {
            setTemperatuesColor("hot")
        }

        setTemperatuesValue(newtemper)
        setShowtext(!showtext)

    }

    const decrement = () => {
        const newtemper = temperatuesValue - 1
        if (newtemper < 15) {
            setTemperatuesColor("cold")
        }
        setTemperatuesValue(newtemper)
        setShowtext(!showtext)
    }


    const 

    return (
        <div className='app-container'>
            <div className="display-container">
                <div className={`temperatue ${temperatuesColor}`}>{temperatuesValue}* C</div>
            </div>
            <div className='button-container'>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                {showtext && <p>This text</p>}
            </div>
        </div>
    );
}

export defaul