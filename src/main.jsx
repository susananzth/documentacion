import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './scss/styles.scss'
import Nav from './Nav'
import Footer from './Footer'
import BtnCollapse from './BtnCollapse'
import './index.css'

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav />
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
