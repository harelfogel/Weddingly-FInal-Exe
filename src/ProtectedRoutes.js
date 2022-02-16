import React from 'react'
import { Route, Routes } from 'react-router'
import Logout from './Components/Logout/Logout';
import Meetings from './Components/Meetings/Meetings';
import CalendarPage from './View/CalendarPage/CalendarPage';
import SuppliersPage from './View/SuppliersPage/SuppliersPage';

const ProtectedRoutes = ({setAuthStatus}) => {
  return (
    <>
    <Routes>
        <Route path="/Suppliers" element={<SuppliersPage/>} />
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Meetings" element={<Meetings/>} />
        <Route path="/Logout" element={<Logout setAuthStatus={setAuthStatus}/>}/>
    </Routes>
    </>
  )
}

export default ProtectedRoutes;