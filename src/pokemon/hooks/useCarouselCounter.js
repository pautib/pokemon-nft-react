import {useState} from 'react';

export const useCarouselCounter = (initialValue = 0, minValue = 0, maxValue = Infinity) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        counter === maxValue ? setCounter(minValue) : setCounter(counter + 1);
    }
    const decrement = () => {
        counter === minValue ? setCounter(maxValue) : setCounter(counter - 1);
    }
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}