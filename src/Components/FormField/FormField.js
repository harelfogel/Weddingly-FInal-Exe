import React from 'react';
import { TextField } from '@mui/material';
const FormField = ({label, ref, width}) => {
    return (
            <TextField
                ref={ref}
                label={label}
                className="form-variant"
                sx={{background: '#fff', borderRadius: '12px', margin: "1rem 0.5rem", width: width ?? "50%"}}/>
    );
};

export default FormField;
