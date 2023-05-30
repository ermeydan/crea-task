import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteProviders } from './Routes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteProviders />
  </React.StrictMode>,
)
