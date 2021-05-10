import {useEffect, useRef} from "react";

export const useFadeIn = (duration = 1, delay) => {
    if (typeof duration !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration} ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return {ref: element, style: {opacity: 0}};
}
