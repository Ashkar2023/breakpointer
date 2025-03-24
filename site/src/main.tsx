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
        <BreakpointerProvider breakpointsObj={config.theme.screens}>
            <App />
        </BreakpointerProvider>
    </StrictMode>,
)
