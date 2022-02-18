import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig';
import useModal from '../../Hooks/useModal/useModal';
import { alertError, alertSucess } from '../AlertToast/AlertToast';
import './LoginModal.css';


const LoginModal = ({ setAuth }) => {
  const { isShowing, toggle } = useModal();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const responseLogin = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signin`, data, { withCredentials: true })
      saveUserToLocalStorage(responseLogin.data);
      toggle();
      setAuth("Authrized");
      alertSucess('Successful login!');
      if (responseLogin.data.roles == 'supplier') {
        navigate('/Calendar');
      } else if (responseLogin.data.roles == 'admin') {
        navigate('/Manager');
      } else if  (responseLogin.data.roles == 'client') {
        navigate('/Suppliers');
      }
    } catch (e) {
      console.log(e);
      if (e.response.status == 401) {
        alertError("wrong password")
      } else if (e.response.status == 404) {
        alertError("wrong email")
      } else {
        alertError("connection to be couldn't be esstablished")
      }
    }
  }
  return (
    <>
      {isShowing && (<>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="client-modal">
            <div className="modal-header">
              <div className="modal-headline">
              </div>
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="client-login-form">
              <div className="client-login-headline">
                <Typography variant={'h5'} >Log In</Typography>
              </div>
              <div className="client-fields">
                <TextField type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.Email?.type === 'required' && "Email is required"}
                <TextField type="password" placeholder="Password" {...register("Password", { required: true })} />
                {errors.Password?.type === 'required' && "password is required"}
              </div>
              <div className="client-button">
                <Button color="primary" variant="contained" type="submit" >
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>)}
      <div className="button-login" >
        <Button variant="nav-button" onClick={toggle}>Log In</Button>
      </div>
    </>
  )
}

export default LoginModal