import './App.css'
import AddEmployeeModal from './components/AddEmployeeModal.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Employees from './pages/Employees.jsx'
import Leaves from './pages/Leaves.jsx';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='admin/dashboard' element={<Dashboard/>}/>
          <Route path='admin/employees' element={<Employees/>}/>
          <Route path='admin/leaves' element={<Leaves/>}/>
        </Routes>
      </BrowserRouter> */}
      <AddEmployeeModal/>
    </>
  )
}

export default App
