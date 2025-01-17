import React from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'


const App = () => {
  return (
    <>
    {/* <Login/> */}
    <EmployeeDashboard/>
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App