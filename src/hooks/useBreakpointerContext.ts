import { useContext } from "react";
import BreakpointerContext from "../contexts/breakPoint.context";

interface IBreakpointerContext {
    screen: string;
    currentWidth: number;
}

export const useBreakpointerContext = (): IBreakpointerContext => {
    const { currentWidth, currentScreen } = useContext(BreakpointerContext);

    return {
        screen: currentScreen!,
        currentWidth: currentWidth
    }
}