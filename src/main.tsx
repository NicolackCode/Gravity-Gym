import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import { AudienceProvider } from './context/AudienceContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AudienceProvider>
      <App />
    </AudienceProvider>
  </React.StrictMode>,
)
