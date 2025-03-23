import { useEffect, useRef, useState } from "react"

export const useDebounce = (val: number = 0, delay = 0) => {
    const [value, setValue] = useState(val);
    const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setValue(val)
        }, delay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, [val]);

    return value
}