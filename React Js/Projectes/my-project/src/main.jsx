import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        {/* <Route path='/DeleteTask/:id' element={<DeleteTask />}/> */}
      </Routes>
    </Router>
  </StrictMode>,
)
