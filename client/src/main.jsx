import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* MirageJS */
import { server } from "./server";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  server();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
