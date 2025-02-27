import { useState } from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        // count = count + 1;
        // It is used for updating the state 
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter ... </h1>
            <button onClick={handleIncrement}>Increment</button>
            <p>{count}</p>
        </div>
    );
}


// export const Counter = () => {
//     let count = 0;
//     const handleIncrement = () => {
//         count = count + 1;
//         // It is used for updating the state 
//         // setCount(count + 1);
//         count = count + 1
      
//     }
//     return (
//         <div>
//             <h1>Counter ... </h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <p>{count}</p>
//         </div>
//     );
// }