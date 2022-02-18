import React from 'react';
import './FormField.css'
import { TextField } from '@mui/material';
const FormField = ({ label, OnChangeHandler, width, value, type }) => {
    return (
        <TextField className="form-field"
            value={value}
            type={type}
            label={label}
            onChange={(e) => OnChangeHandler(e.target.value)}
            className="form-variant"
            sx={{ background: '#fff', borderRadius: '12px', margin: "1rem 0.5rem", width: width ?? "50%" }} />
    );
};

export default FormField;
