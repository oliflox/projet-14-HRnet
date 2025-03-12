import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/app.css'
import Index from './pages/Index.jsx'
import Employees from './pages/Employees.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  </StrictMode>,
)
