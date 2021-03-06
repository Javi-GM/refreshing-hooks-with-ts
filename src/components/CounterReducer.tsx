import { useReducer } from 'react';
import * as actions from '../counter-reducer/actions/actions';
import { INITIAL_STATE, reducer } from '../counter-reducer/state/counterReducer';

export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const plus = (value: number) => {
        dispatch(actions.doIncreaseBy(value))
    }

    const reset = () => {
        dispatch(actions.doReset());
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
