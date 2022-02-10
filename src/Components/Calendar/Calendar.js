import React, { useState } from "react";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import "./Calendar.css";
import { TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from "@mui/lab";
import {format} from 'date-fns'


const Calendar = ({datePicked, setDate}) => {
    const handleChange = (newValue) => {
        setDate(newValue);
    };
    return (
        
        <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    minDate={new Date()}
                    label="Appoitment Date"
                    inputFormat="dd-MM-yyyy HH:mm"
                    value={datePicked}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};
export default Calendar;