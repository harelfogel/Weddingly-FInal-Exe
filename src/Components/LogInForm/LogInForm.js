import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';

export default function LoginForm() {
  return (
    <React.Fragment>
        <Box sx={{ bgcolor: '#cfe8fc',
         display: 'flex', flexDirection: 'column',
         p: '10%', height:"60%" }}>
        <TextField
           label="email"
          variant="outlined"
        />
        <TextField
          label="email"
          variant="outlined"
        />
        <TextField
          label="user name"
          variant="outlined"
        />
        <Button variant='dashed'>Submit</Button>
        </Box>
    </React.Fragment>
  );
}