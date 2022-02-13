import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './View/LandingPage/LandingPage';
import React, { useState } from "react";
import { Grid } from '@mui/material';
import useAuth from './Hooks/useAuth/useAuth';
import ProtectedRoutes from './ProtectedRoutes';
import SuppliersPage from './View/SuppliersPage/SuppliersPage';
import MyLoader from './Loader/MyLoader';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [authStatus, setAuthStatus] = useAuth();
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Routes>
          {<Route path="/" element={<LandingPage isAuth={isAuth} setAuth={setAuth} />} /> }
          {<Route path="/" element={<LandingPage isAuth={isAuth} setAuth={setAuth} />} /> }
          {<Route path="*" element={<ProtectedRoutes/>} />}
        </Routes>
      </Grid>
    </BrowserRouter>

  );
}

export default App;
