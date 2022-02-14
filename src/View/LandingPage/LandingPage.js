import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import Header from '../../Components/Header/Header';
import ClientRegisterForm from '../../Components/ClientRegisterForm/ClientRegisterForm';
import WeddingPhoto from './WeddingPhoto';
import { useNavigate } from 'react-router-dom';
function LandingPage({setAuth}) {
    const navigate = useNavigate();
    return (
        <>
            <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column', mt: "5rem" }}>
                <Grid sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <svg width="14" height="126" viewBox="0 0 14 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="126" fill="#FF477E" />
                    </svg>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ fontSize: "3.2rem" }}>
                            When your {""}
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2293 2.50543C22.8159 1.08837 20.9424 0.223482 18.9471 0.0669889C16.9518 -0.0895046 14.9663 0.472717 13.3493 1.6521C11.6529 0.390279 9.54132 -0.181889 7.43989 0.050812C5.33846 0.283513 3.40325 1.3038 2.02396 2.90621C0.644668 4.50862 -0.0762445 6.57412 0.00639387 8.68678C0.0890323 10.7994 0.969083 12.8023 2.46933 14.2921L10.7493 22.5854C11.4427 23.2678 12.3765 23.6502 13.3493 23.6502C14.3221 23.6502 15.256 23.2678 15.9493 22.5854L24.2293 14.2921C25.7861 12.7258 26.6599 10.6071 26.6599 8.39876C26.6599 6.1904 25.7861 4.07174 24.2293 2.50543Z" fill="#FF477E" />
                            </svg>
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: "3.5rem" }} >
                            Dream Wedding come true
                        </Typography>
                    </Box>
                </Grid>
                <ClientRegisterForm navigate={navigate} setAuth={setAuth} />
            </Grid>
            <Grid item xs={4}>
                <WeddingPhoto />
            </Grid>
            <Button variant="work-with" sx={{ color: 'white', position: 'absolute', bottom: '30px', right: '50px' }}>Come Work With US!</Button>
        </>
    );
}

export default LandingPage;
