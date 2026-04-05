import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Employees from './pages/Employees.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin/dashboard' element={<Dashboard/>}/>
          <Route path='admin/employees' element={<Employees/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
