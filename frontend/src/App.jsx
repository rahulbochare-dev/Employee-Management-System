import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Employees from './pages/Employees.jsx'
import EmployeeDetails from './components/EmployeeDetails.jsx'
import EmployeeSelf from './pages/EmployeeSelf.jsx'
import SignupRoleSelect from './pages/SignupRoleSelect.jsx'
import Leaves from './pages/Leaves.jsx';
import LeaveDetails from './components/LeaveDetails.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import LoginEmployee from './pages/LoginEmployee.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { useUserStore } from "./store/userStore.js";
import { useEffect } from 'react';
import Loading from './components/Loading.jsx';

function App() {
  const { user, loading, getCurrentUser } = useUserStore()

  useEffect(() => {
    getCurrentUser()
  }, [])
  

  return (
    <>
      {loading? <Loading/> : <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupRoleSelect/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login-employee' element={<LoginEmployee/>}/>
          <Route path='admin/dashboard' element={<Dashboard/>}/>
          <Route path='admin/employees' element={<Employees/>}/>
          <Route path='admin/employees/:id' element={<EmployeeDetails/>}/>
          <Route path='admin/leaves/:id' element={<LeaveDetails/>}/>
          <Route path='admin/leaves' element={<Leaves/>}/>
          <Route path='employee' element={<EmployeeSelf/>}/>
        </Routes>
      </BrowserRouter>}
    </>
  )
}

export default App
