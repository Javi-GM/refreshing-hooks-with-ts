import { useReducer } from 'react';
import { INITIAL_STATE, reducer } from './state/counterReducer';

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
            <h1> CounterReducer refactorizado </h1>

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
