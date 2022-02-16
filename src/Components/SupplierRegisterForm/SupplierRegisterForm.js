import * as React from 'react';
import './SupplierRegisterForm.css';
import Box from '@mui/material/Box';
import { Autocomplete, Button, TextField } from '@mui/material';
import FormField from '../FormField/FormField';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alertError, alertSucess } from '../AlertToast/AlertToast';
import { saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig';
import axios from 'axios';

export default function SupplierRegisterForm({ setAuth }) {
  const navigate = useNavigate();
  const [width, setWidth] = useState('130%');
  const [formType, setformType] = useState('text');
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      fullName:"",
      email: "",
      price:"",
      phone:"",
      photo:"",
      password: "",
      roles:'supplier'
    }
  );
  const OnChangeFullNameHandler = (fullNameEvent) => {
    try {
      console.log(fullNameEvent);
      setFormInput({ ["fullName"]: fullNameEvent });
    } catch (e) {
      alertError(e);
    }
  }
  const OnChangeBudgetHandler = (budgetEvent) => {
    try {
      setFormInput({ ["budget"]: budgetEvent });
    }
    catch (e) {
      alertError(e);
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
      alertError(e);
    }

  }
  const OnChangeEmailHandler = (emailEvent) => {
    try {
      if (emailEvent) {
        setFormInput({ ["email"]: emailEvent });
      } else {
        throw 'Bad email input';
      }
    } catch(e){
      alertError(e);
    }
  }

  const OnChangeProfessionHandler = (e,professionEvent) => {
    try {
      if (professionEvent) {
        setFormInput({ ["type"]: professionEvent });
      } else {
        throw 'Bad profession input';
      }
    } catch(e){
      alertError(e);
    }
  }

  const OnChangeLocationHandler = (LocationEvent) => {
    try {
      if (LocationEvent) {
        setFormInput({ ["location"]: LocationEvent });
      } else {
        throw 'Empty location field!';
      }
    } catch (e) {
      alertError(e);
    }
  }

  const OnChangePhotoHandler =(photoEvent) => {
    try {
      if (photoEvent) {
        setFormInput({ ["photo"]: photoEvent });
      } else {
        throw 'Empty photo url field!';
      }
    } catch (e) {
      alertError(e);
    }
  }


  const handleSubmit = (evt) => {
    console.log(formInput)
    try {
      let data = { ...formInput };
      if (data.fullName && data.budget && data.type && data.password && data.email) {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signup`, { ...data, appointment: [] }, { withCredentials: true })
          .then(response => {
            console.log("here");
            saveUserToLocalStorage(response.data);
            setAuth("Authrized");
            alertSucess('Your request is sent to the system');
          })
          .catch(error => console.error("Error:", error))
      } else {
        throw ('Invalid fields');
      }
    } catch (e) {
      alertError("Empty fields! Please try again");
    }
  };
  return (
    <React.Fragment>
      <Box className="supplier-register-form">
        <FormField label={"Full Name"} type={'text'} width={width} name="Full-Name" OnChangeHandler={OnChangeFullNameHandler} />
        <FormField label={"Price"} type={'number'} width={width} OnChangeHandler={OnChangeBudgetHandler} />
        <FormField label={"Email"} type={'email'} width={width} OnChangeHandler={OnChangeEmailHandler} />
        <FormField label={"Location"} type={'text'} width={width} OnChangeHandler={OnChangeLocationHandler} />
        <FormField label={"Photo Url"} type={'url'} width={width} OnChangeHandler={OnChangePhotoHandler} />
        <Autocomplete onChange={OnChangeProfessionHandler} disablePortal options={["Photographer","Dj","Wedding hall"]} sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Type" />}/>
        <FormField label={"Password"} type={'password'} width={width} OnChangeHandler={OnChangePasswordHandler} />
        <Button variant='form' onClick={handleSubmit} sx={{ marginTop: '2rem' }}>Join us!</Button>
      </Box>
    </React.Fragment>
  );
}
