import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CalcCostoProvider } from './components/context/CalcContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcCostoProvider>
      <App />
    </CalcCostoProvider>
  </React.StrictMode>,
)
