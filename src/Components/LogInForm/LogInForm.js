import * as React from 'react';
import './LogInForm.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import FormField from '../FormField/FormField';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [formType, setformType] = useState('text');
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      brideName: "",
      groomName: "",
      email: "",
      password: ""
    }
  );
  const OnChangeBrideNameHandler = (brideNameEvent) => {
    try {
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

  const handleSubmit = (evt) => {
    try {
      evt.preventDefault();
      let data = { formInput };
      if (data.formInput.brideName && data.formInput.groomName && data.formInput.password && data.formInput.email) {
        console.log(data);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signin`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.status == 200 ? response.json() : alert("wrong!"))
          .then(data => {
            props.setUser(data.user);
            navigate('/Suppliers');
          })
          .then(response => console.log("Success:", JSON.stringify(response)))
          .catch(error => console.error("Error:", error));

          
      } else {
        throw ('Please fill all test fields');
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <React.Fragment>
      <Box className="login-form">
        <FormField label={"Bride Name"} type={'text'}  name="Bride-Name" OnChangeHandler={OnChangeBrideNameHandler} />
        <FormField label={"Groom Name"} type={'text'} OnChangeHandler={OnChangeGroomNameHandler} />
        <FormField label={"Email"} type={'text'}  OnChangeHandler={OnChangeEmailHandler} />
        <FormField label={"Password"} type={'password'} OnChangeHandler={OnChangePasswordHandler} />
        <Button variant='form' onClick={handleSubmit} sx={{ marginTop: '2rem' }}>Submit</Button>
      </Box>
    </React.Fragment>
  );
}
