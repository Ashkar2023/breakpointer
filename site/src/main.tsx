import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BreakPointProvider } from 'breakpointer'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BreakPointProvider>
            <App />
        </BreakPointProvider>
    </StrictMode>,
)
