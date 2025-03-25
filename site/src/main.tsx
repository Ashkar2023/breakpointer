import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BreakpointerProvider } from 'breakpointer'
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config"

const config = resolveConfig(tailwindConfig);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BreakpointerProvider
            breakpointsObj={{
                ...config.theme.screens,
                dev:"380",
                ved:400,
            }}
            mode={import.meta.env.MODE}
            classNames={{
                wrapper: ["bg-gray-300", "text-red-800", "p-4", "rounded-lg", "shadow-lg"],
                iconWrapper: ["content-start"],
                screen: ["font-bold", "text-lg", "text-blue-500"],
                currentWidth: ["text-sm", "text-gray-400"],
            }}
        >
            <p className="text-red-500">sdfsdf</p>
            <App />
        </BreakpointerProvider>
    </StrictMode>,
)
