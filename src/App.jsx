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
  const authData = useContext(AuthContext)
  // console.log(authData);

  useEffect(() => {
    if(authData) {
     const loggedInUser = localStorage.getItem('loggedInUser') 
      if(loggedInUser) {
        setUser(loggedInUser.role)
      } 
    }
  }, [authData])
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role :'admin'}))
    } else if(authData && authData.employees.find((e)=> email == e.email && password == e.password ) ) {
      localStorage.setItem('loggedInUser', JSON.stringify({role :'employee'}))
      setUser('employees')     
    } else {
        alert('Invalid email or password')
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user === 'admin' ? <AdminDashboard /> : ''}
    {user === 'employee' ? <EmployeeDashboard /> : ''}
    </>
  )
}

export default App