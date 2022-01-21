import { Grid, Typography } from '@mui/material';
import React from 'react';
import Header from '../../Components/Header/Header';
import WeddingPhotoURL from '../../Assets/weddingPhoto.jpg'
import LoginForm from '../../Components/LogInForm/LogInForm';

function LandingPage() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={7} >
        <Grid>
            <Typography variant="h4">
                When your 
            </Typography>
            <Typography variant="h4" sx={{fontWeight: 'bold'}} >
                Dream Wedding come true
            </Typography>
        </Grid>
            <LoginForm />
        </Grid>
        <Grid item xs={5}>
            <img src={WeddingPhotoURL} className='landing-photo' />
        </Grid>
      </Grid>
  );
}

export default LandingPage;
