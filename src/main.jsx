import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import 'highlight.js/styles/androidstudio.css'
import './index.css'

import Fundamental from './pages/fundamental'
import Html from './pages/html'
import Css from './pages/css'
import Javascript from './pages/javascript'
import DataScience from './pages/data_science'

const router = createHashRouter([
  {
    path: '/',
    element:<Fundamental />
  },
  {
    path: '/fundamental',
    element:<Fundamental />
  },
  {
    path: '/html',
    element:<Html />
  },
  {
    path: '/css',
    element:<Css />
  },
  {
    path: '/javascript',
    element:<Javascript />
  },
  {
    path: '/data_science',
    element:<DataScience />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
