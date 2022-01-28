import { useState } from 'react';

interface Props {
  initialValue? : number
}

export const Counter = (props: Props) => {

    const { initialValue = 1} = props;

    const [count, setCount] = useState(initialValue);
    
    const plus = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h1> Counter </h1>

            <span> {count} </span>

            <button onClick={ plus }>
                +1
            </button>
        </>
    )
}
