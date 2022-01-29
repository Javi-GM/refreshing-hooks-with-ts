import { useReducer, useState } from 'react';


interface CounterState {
  counter:  number;
  previous: number;
  changes:  number;
}

const INITIAL_STATE: CounterState = {
    counter:  0,
    previous: 0,
    changes:  0,
}

type Action = 
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' };

const reducer = (state: CounterState, action: Action): CounterState => {
    switch (action.type) {
        case 'increaseBy': 
            return {
                counter: state.counter + action.payload.value,
                changes: state.changes + 1,
                previous: state.counter,
            };

        case 'reset': 
            return {
                ...INITIAL_STATE,
            };

        default:
            return state;
    }
}

export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const plus = (value: number) => {
        dispatch({type: 'increaseBy', payload: {value}})
    }

    const reset = () => {
        dispatch({type: 'reset'})
    }

    return (
        <div>
            <h1> CounterReducer </h1>

            <pre> {JSON.stringify(counterState, null, 2)} </pre>

            <button onClick={ () => plus(1) }>
                +1
            </button>

            <button onClick={ () => plus(5) }>
                +5
            </button>

            <button onClick={ () => plus(10) }>
                +10
            </button>

            <button onClick={ reset }>
                Reset
            </button>
        </div>
    )
}
