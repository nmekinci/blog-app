import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  // const {currentuser} = useContext(AuthContext)
  const currentuser = true
  
  return currentuser ? <Outlet /> : <Navigate to="/auth" replace/>
}

export default PrivateRouter