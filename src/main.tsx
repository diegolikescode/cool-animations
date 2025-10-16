import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        {/*
        <main className={`theme-penumbra w-full h-full`}>
            <App />
        </main>
        */}
    </StrictMode>
)
