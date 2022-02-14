import * as React from 'react';
import './ClientRegisterForm.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import FormField from '../FormField/FormField';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig';
import axios from 'axios';
import { alertError } from '../AlertToast/AlertToast';

export default function ClientRegisterForm({setAuth}) {
  const navigate = useNavigate();
  const [formType, setformType] = useState('text');
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      brideName: "",
      groomName: "",
      budget: "",
      email: "",
      roles: 'client',
      password: ""
    }
  );
  const OnChangeBrideNameHandler = (brideNameEvent) => {
    try {
      console.log(brideNameEvent);
      setFormInput({ ["brideName"]: brideNameEvent });
    } catch (e) {
      alert(e);
    }
  }
  const OnChangeGroomNameHandler = (groomNameEvent) => {
    try {
      setFormInput({ ["groomName"]: groomNameEvent });
    }
    catch (e) {
      alert(e);
    }
  }
  const OnChangePasswordHandler = (passwordEvent) => {
    try {
      setformType('password');
      if (passwordEvent.length < 28) {
        setFormInput({ ["password"]: passwordEvent });
      } else {
        throw "Invalid password";
      }
    } catch (e) {
      alert(e);
    }

  }
  const OnChangeEmailHandler = (emailEvent) => {
    setFormInput({ ["email"]: emailEvent });
  }

  const OnChangeBudgetHandler = (budgetEvent) => {
    try {
      if (budgetEvent) {
        setFormInput({ ["budget"]: budgetEvent });
      } else {
        throw 'Empty budget field!';
      }
    } catch (e) {
      alert(e);
    }
  }

  const handleSubmit = (evt) => {
    try {
      let data = { ...formInput };
      console.log(data)
      if (data.brideName && data.groomName && data.password && data.email) {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signup`, {...data, appointment: []}, { withCredentials: true})
        .then(response =>{
           saveUserToLocalStorage(response.data);
          setAuth("Authrized")})
        .catch(error => console.error("Error:", error))
      } else {
        throw ('Invalid fields');
      }
    } catch (e) {
      alertError("Error in registration")
    }
  };

  return (
    <React.Fragment>
      <Box className="register-form">
        <FormField label={"Bride Name"} type={'text'} name="Bride-Name" OnChangeHandler={OnChangeBrideNameHandler} />
        <FormField label={"Groom Name"} type={'text'} OnChangeHandler={OnChangeGroomNameHandler} />
        <FormField label={"Bugdet"} type={'text'} OnChangeHandler={OnChangeBudgetHandler} />
        <FormField label={"Email"} type={'text'} OnChangeHandler={OnChangeEmailHandler} />
        <FormField label={"Password"} type={'password'} OnChangeHandler={OnChangePasswordHandler} />
        <Button variant='form' onClick={handleSubmit} sx={{ marginTop: '2rem' }}>Join us!</Button>
      </Box>
    </React.Fragment>
  );
}
