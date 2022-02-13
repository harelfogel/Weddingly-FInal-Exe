import React from 'react'
import { Route, Routes } from 'react-router'
import SuppliersPage from './View/SuppliersPage/SuppliersPage';

const ProtectedRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/Suppliers" element={<SuppliersPage/>} />
    </Routes>
    </>
  )
}

export default ProtectedRoutes