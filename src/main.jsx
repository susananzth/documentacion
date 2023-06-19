import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './scss/styles.scss'
import './index.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Footer from './Footer'
import BtnCollapse from './BtnCollapse'

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('sidebar')).render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('btnCollapse')).render(
  <React.StrictMode>
    <BtnCollapse />
  </React.StrictMode>,
)
