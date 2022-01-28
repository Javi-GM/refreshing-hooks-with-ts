import { useState } from 'react';

interface Props {
  initialValue? : number
}

interface CounterByState {
  clicks: number;
  counter : number;
}

export const CounterBy = (props: Props) => {

    const { initialValue = 5} = props;

    const [{counter, clicks}, setCounterState] = useState<CounterByState>({
        counter: initialValue,
        clicks: 0
    });

    const plus = (value: number) => {
        setCounterState(prev => ({
            ...prev,
            clicks: prev.clicks + 1,
            counter: prev.counter + value,
        }));
    }

    return (
        <>
            <h1> CounterBy: { counter }</h1>
            <h1> Clicks: { clicks }</h1>

            <button onClick={ () => plus(1) }>
                +1
            </button>

            <button onClick={ () => plus(5) }>
                +5
            </button>
        </>
    )
}
