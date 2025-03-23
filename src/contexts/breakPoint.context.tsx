import { createContext } from "react"

interface IBreakPointState {
    currentWidth: number,
    currentScreen: string | null
}

interface IBreakPointContext extends IBreakPointState {
}

const BreakPointerContext = createContext<IBreakPointContext>({
    currentWidth: window.innerWidth,
    currentScreen: ""
})

export default BreakPointerContext