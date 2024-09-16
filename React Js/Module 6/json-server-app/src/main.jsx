import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout.jsx'
import Create from './Components/Create.jsx'
import Edit from './Components/Edit.jsx'
import Delete from './Components/Delete.jsx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' index element={<Layout />} />
        <Route path='/add-data' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </Router>
  </StrictMode>,
)

