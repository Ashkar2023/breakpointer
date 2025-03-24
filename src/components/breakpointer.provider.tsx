import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "../core/utils";
import BreakpointerContext from "../contexts/breakPoint.context";
import { breakpoints as breakpointsConstants } from "../core/constants/breakpoints";
import { parseUnit } from "../core/unit.parser";

type BreakpointProviderProps = {
    children: React.ReactNode,
    breakpointsObj?: Record<string, string>,
    mode: string
};


export const BreakpointerProvider = ({
    children,
    breakpointsObj = {},
    mode
}: BreakpointProviderProps) => {
    const breakpoints = {
        ...breakpointsConstants,
        ...parseUnit(breakpointsObj),
    }
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [currentScreen, setCurrentScreen] = useState<keyof typeof breakpoints | null>(null);

    const debouncedResizeHandler = useCallback(
        debounce(() => {
            setInnerWidth(window.innerWidth);
        }, 50),
        []
    );

    const detectScreen = useCallback((width: number) => {
        let curr = -Infinity;
        let screen: keyof typeof breakpoints | null = null;

        for (let key in breakpoints) {
            const typedKey = key as keyof typeof breakpoints;
            
            if (breakpoints[typedKey] <= width && breakpoints[typedKey] > curr) {
                curr = breakpoints[typedKey];
                screen = typedKey;
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
        <BreakpointerContext.Provider value={{
            currentWidth: innerWidth,
            currentScreen: currentScreen,
            mode: mode
        }}>
            {children}
        </BreakpointerContext.Provider>
    );
};