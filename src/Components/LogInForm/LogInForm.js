import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import FormField from '../FormField/FormField'
export default function LoginForm() {
  return (
    <React.Fragment>
        <Box sx={{
         display: 'flex', flexDirection: 'column',
         p: '10%', height:"60%" }}>
            <FormField label={"Bride Name"}/>
            <FormField label={"Groom Name"}/>
            <FormField label={"Email"}/>
            <FormField label={"Password"}/>


            <Button variant='form'>Submit</Button>
        </Box>
    </React.Fragment>
  );
}
