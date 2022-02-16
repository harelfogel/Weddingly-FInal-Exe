import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './View/LandingPage/LandingPage';
import React, { useState } from "react";
import { Grid } from '@mui/material';
import useAuth from './Hooks/useAuth/useAuth';
import ProtectedRoutes from './ProtectedRoutes';
import SuppliersPage from './View/SuppliersPage/SuppliersPage';
import MyLoader from './Loader/MyLoader';
import CalendarPage from './View/CalendarPage/CalendarPage';

function App() {
  const [authStatus, setAuthStatus] = useAuth();
  const [user,setUser] = useState(null);
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header authStatus={authStatus} setAuth={setAuthStatus}/>
        </Grid>
        <Routes>
          {authStatus == "loading" && <Route path="*" element={<MyLoader/> } />}
          {authStatus == "UnAuthrized" &&<Route path="*" element={<LandingPage setAuth={setAuthStatus} setUser={setUser} />} /> }
          {authStatus == "Authrized" &&<Route path="*" element={<ProtectedRoutes setAuthStatus={setAuthStatus} />} />}
        </Routes>
      </Grid>
    </BrowserRouter>

  );
}

export default App;
