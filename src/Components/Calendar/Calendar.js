import React from "react";
import "./Calendar.css";
import { TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from "@mui/lab";


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