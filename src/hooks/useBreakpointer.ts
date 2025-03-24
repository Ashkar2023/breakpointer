import { useContext } from "react";
import BreakpointerContext from "../contexts/breakPoint.context";

interface IBreakpointerContext {
    screen: string;
    currentWidth: number;
    _render: boolean
}

export const useBreakpointer = (): IBreakpointerContext => {
    const { currentWidth, currentScreen, mode } = useContext(BreakpointerContext);

    return {
        screen: currentScreen!,
        currentWidth: currentWidth,
        _render: mode === "development" ? true : false
    }
}