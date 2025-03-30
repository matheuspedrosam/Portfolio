import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
)
