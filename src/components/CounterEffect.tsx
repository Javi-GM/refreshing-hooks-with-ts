import { useEffect, useState } from 'react';

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [count, setCount] = useState(5);
    
    const plus = () => {
        setCount(prev => Math.min(prev + 1, MAX_COUNT));
    }

    //TODO no deveria pasar de 10
    useEffect(() => {
    
    }, []);

    return (
        <>
            <h1> CounterEffect </h1>

            <span> {count} </span>

            <button onClick={ plus }>
                +1
            </button>
        </>
    )
}
