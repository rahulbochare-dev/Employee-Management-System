import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Employees from './pages/Employees.jsx'
import Leaves from './pages/Leaves.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { useUserStore } from "./store/userStore.js";
import { useEffect } from 'react';

function App() {
  const { user, getCurrentUser } = useUserStore()

  useEffect(() => {
    getCurrentUser()
  }, [])
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='admin/dashboard' element={<Dashboard/>}/>
          <Route path='admin/employees' element={<Employees/>}/>
          <Route path='admin/leaves' element={<Leaves/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
