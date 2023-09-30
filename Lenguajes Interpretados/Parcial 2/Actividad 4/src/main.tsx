import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from './Contador'
import './index.css'
import Adjetivos from './Adjetivos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Contador/>
    <Adjetivos name='Profe Chino' adjective='buena onda'/>
  </React.StrictMode>,
)
