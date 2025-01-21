import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import js from '@eslint/js'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])
  
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role :'admin', data: 'employee'}))
    } else if(authData ) {
      const employee = authData.employees.find((e)=> email == e.email && password == e.password )
        if(employee) {
          setUser('employee')
          setLoggedInUser(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role :'employee'}))
        }
    } else {
        alert('Invalid email or password')
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user === 'admin' ? <AdminDashboard /> : (user == 'employee' ?<EmployeeDashboard data={loggedInUser} /> :null) }
    </>
  )
}

export default App