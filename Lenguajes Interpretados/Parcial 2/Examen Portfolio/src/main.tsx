import './css/Style.css'
import './css/Skins/Color-1.css'
import './css/Skins/Color-2.css'
import './css/Skins/Color-3.css'
import './css/Skins/Color-4.css'
import './css/Skins/Color-5.css'
import './css/normalize.css'
import './css/StyleSwitcher.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Aside from './router/Aside'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Aside/>
    </BrowserRouter>
  </React.StrictMode>,
)
