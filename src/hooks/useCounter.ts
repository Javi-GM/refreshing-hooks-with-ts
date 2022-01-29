import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const DEFAULT_MAX_COUNT = 10;
const DEFAULT_INITIAL_VALUE = 0;

interface Arguments {
    maxCount?: number;
    initialCounterValue?: number;
};

export const useCounter = (args: Arguments) => {

    const {
        maxCount = DEFAULT_MAX_COUNT,
        initialCounterValue = DEFAULT_INITIAL_VALUE
    } = args;

    const [counter, setCounter] = useState(initialCounterValue);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);
    const timeline = useRef(gsap.timeline());
    
    const plus = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        //inicializacion del timeline, pause para que no se ejecute
        timeline.current.to(
            elementToAnimate.current,
            {y: -10, duration: 0.2, ease: 'ease.out'}
        ).to(
            elementToAnimate.current,
            {y: 0, duration: 1, ease: 'bounce.out'}
        ).pause();

    }, []);

    useEffect(() => {
        //ejecucion del timeline desde el principio
        timeline.current.play(0);
    }, [counter]);

    return {counter, plus, elementToAnimate};
}
