import React from 'react'
import { Route, Routes } from 'react-router'
import Logout from './Components/Logout/Logout';
import CalendarPage from './View/CalendarPage/CalendarPage';
import SuppliersPage from './View/SuppliersPage/SuppliersPage';

const ProtectedRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/Suppliers" element={<SuppliersPage/>} />
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Logout" element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default ProtectedRoutes;