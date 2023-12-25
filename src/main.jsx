import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    // BrowserRouter Which Allow the App to Route without refreshing the App, User can Navigate
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
)

