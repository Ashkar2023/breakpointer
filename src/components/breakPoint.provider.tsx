import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "../util/debounce";
import BreakPointerContext from "../contexts/breakPoint.context";

type BreakPointProviderProps = {
    children: React.ReactNode,
    breakpoints?: Record<string, number>
};

export const breakPointConstanst = {
    sm: 640, // large phones & small tablets
    md: 768, // Tablets
    lg: 1024, // Laptops & large tablets
    xl: 1280, // Desktop & large laptops
    "2xl": 1536 // Wide screen & large desktops
};

const BreakPointProvider = ({ children, breakpoints = { ...breakPointConstanst } }: BreakPointProviderProps) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [currentScreen, setCurrentScreen] = useState<keyof typeof breakpoints | null>(null);

    const debouncedResizeHandler = useCallback(
        debounce(() => {
            setInnerWidth(window.innerWidth);
        }, 50),
        []
    );

    console.log(breakpoints);
    const detectScreen = useCallback((width: number) => {
        let curr = -Infinity;
        let screen: keyof typeof breakpoints | null = null;

        for (let key in breakpoints) {
            console.log(breakpoints[key],width)
            if (breakpoints[key] <= width && breakpoints[key] > curr) {
                curr = breakpoints[key];
                screen = key;
            }
        }

        console.log(curr, screen)

        return screen;
    }, [breakpoints]);

    useEffect(() => {
        setCurrentScreen(detectScreen(innerWidth));
    }, [innerWidth, detectScreen]);

    useEffect(() => {
        window.addEventListener("resize", debouncedResizeHandler);

        // Initial screen detection
        setCurrentScreen(detectScreen(window.innerWidth));

        return () => {
            window.removeEventListener("resize", debouncedResizeHandler);
        };
    }, []);

    return (
        <BreakPointerContext.Provider value={{
            currentWidth: innerWidth,
            currentScreen: currentScreen
        }}>
            {children}
        </BreakPointerContext.Provider>
    );
};

export default BreakPointProvider