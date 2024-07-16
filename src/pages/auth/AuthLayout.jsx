import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
    <div className='font-poppins'>
        <p>This is Authlayout header</p>
        <Outlet/>
        <p>This is Authlayout header</p>
    </div>


    </>
  )
}

export default AuthLayout