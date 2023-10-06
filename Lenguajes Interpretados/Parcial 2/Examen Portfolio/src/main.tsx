import './css/Style.css'
import './css/Skins/Color-1.css'
import './css/normalize.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
