import { createContext } from "react"

interface IBreakPointState {
    currentWidth: number,
    currentScreen: string | null,
    mode: string

}

interface IBreakPointContext extends IBreakPointState {
}

const BreakpointerContext = createContext<IBreakPointContext>({
    currentWidth: window.innerWidth,
    currentScreen: "",
    mode: "development"
})

export default BreakpointerContext