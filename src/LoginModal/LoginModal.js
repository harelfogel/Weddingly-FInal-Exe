import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';
import useModal from '../Hooks/useModal/useModal';
import './LoginModal.css';


const LoginModal = () => {
  const { isShowing, toggle } = useModal();
  const { register, handleSubmit,setError, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    try{
        const responseLogin= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signin`,data, {withCredentials: true})
        if(responseLogin.status==200){
          toggle();
          navigate('/Suppliers');
        }
        else{
          throw responseLogin;
        } 
          
    }catch(errorLogin){
      alert('Bad input');
      setError('password', {
        type: "server",
        message: 'Something went wrong with password',
      });
    }
  }
  return (
    <>
    {isShowing && (<>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <div className="modal-headline">
            </div>
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="login-headline">
             <Typography >Login In</Typography>
            </div>
          <TextField type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          {errors.Email?.type === 'required' && "Email is required"}
          <TextField type="password" placeholder="Password" {...register("Password", {required: true})} />
          {errors.Password?.type === 'required' && "password is required"}
            <Button color="primary" variant="contained" type="submit" >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>)}
    <Button variant="nav-button" onClick={toggle}>Log In</Button>
  </>
  )
}

export default LoginModal