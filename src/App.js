import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './View/LandingPage/LandingPage';
import SuppliersPage from './View/SuppliersPage/SuppliersPage';
import React, { useState } from "react";
import { Grid } from '@mui/material';
import CalendarPage from './View/CalendarPage/CalendarPage';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [user,setUser] = useState(null);
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Routes>
          <Route path="/" element={<LandingPage isAuth={isAuth} setAuth={setAuth} setUser={setUser} />} />
          <Route path="/Suppliers" element={<SuppliersPage />} />
          <Route path="/Calendar" element={<CalendarPage user = {user}/>} />
        </Routes>
      </Grid>
    </BrowserRouter>

  );
}

export default App;
