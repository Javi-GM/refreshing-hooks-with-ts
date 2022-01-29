import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const {counter, plus, elementToAnimate} = useCounter({
        initialCounterValue: 1,
        maxCount: 10,
    });

    return (
        <div>
            <h1> CounterHook </h1>

            <h2 ref={elementToAnimate}> {counter} </h2>

            <button onClick={ plus }>
                +1
            </button>
        </div>
    )
}
