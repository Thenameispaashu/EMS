import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  
  // },)

  const [user, setUser] = useState(null)
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123') {
      setUser('admin')
    } else if(email === 'user@me.com' && password === '123') {
      setUser('employees')     
    } else {
        alert('Invalid email or password')
    }
  }

  const authData = useContext(AuthContext)
  console.log(authData);
  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user === 'admin' ? <AdminDashboard /> : ''}
    {user === 'employee' ? <EmployeeDashboard /> : ''}
    </>
  )
}

export default App