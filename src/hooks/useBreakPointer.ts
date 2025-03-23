import { useContext } from "react";
import BreakPointerContext from "../contexts/breakPoint.context";

export const useBreakPointContext = () => {
    const { currentWidth, currentScreen } = useContext(BreakPointerContext);

    return {
        currentScreen,
        currentWidth: currentWidth
    }
}