import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [count, setCount] = useState(9);

    const counterElement = useRef<HTMLHeadingElement>(null);
    
    const plus = () => {
        setCount(prev => Math.min(prev + 1, MAX_COUNT));
    }

    //TODO no deveria pasar de 10
    useEffect(() => {
        if (count < 10) return;

        console.log('count', count);

        const timeline = gsap.timeline();

        timeline.to(
            counterElement.current,
            {y: -10, duration: 0.2, ease: 'ease.out'}
        ).to(
            counterElement.current,
            {y: 0, duration: 1, ease: 'bounce.out'}
        );

    }, [count]);

    return (
        <>
            <h1> CounterEffect </h1>

            <h2 ref={counterElement}> {count} </h2>

            <button onClick={ plus }>
                +1
            </button>
        </>
    )
}
