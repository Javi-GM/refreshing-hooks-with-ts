import { Action } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE: CounterState = {
    counter:  0,
    previous: 0,
    changes:  0,
}

export const reducer = (state: CounterState, action: Action): CounterState => {
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
