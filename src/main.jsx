import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import sotre from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    // BrowserRouter Which Allow the App to Route without refreshing the App, User can Navigate
    <Provider store={sotre}>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
    </Provider>
)

