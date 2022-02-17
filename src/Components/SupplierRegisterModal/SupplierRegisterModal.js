import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig';
import useModal from '../../Hooks/useModal/useModal';
import { alertError } from '../AlertToast/AlertToast';
import FormField from '../FormField/FormField';
import SupplierRegisterForm from '../SupplierRegisterForm/SupplierRegisterForm';
import './SupplierRegisterModal.css';


const SupplierRegisterModal = ({ setAuth }) => {
    const { isShowing, toggle } = useModal();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const responseLogin = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signin`, data, { withCredentials: true })
            saveUserToLocalStorage(responseLogin.data);
            toggle();
            setAuth("Authrized");
            setTimeout(() => {
                navigate('/Suppliers');
            }, 1);
        } catch (e) {
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
                <div className="supplier-modal-overlay" />
                <div className="supplier-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="supplier-modal">
                        <div className="modal-header">
                            <div className="modal-headline">
                            </div>
                            <button type="button" className="register-modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="supplier-register-headline">
                                <Typography fontSize="18px"> Suppliers Registration</Typography>
                            </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                           <SupplierRegisterForm setAuth={setAuth}/>
                        </form>
                    </div>
                </div>
            </>)}
            <Button onClick={toggle} variant="work-with" sx={{color: 'white', position: 'fixed', bottom: '30px', right: '50px' }}>Come Work With US!</Button>
        </>
    )
}
export default SupplierRegisterModal;