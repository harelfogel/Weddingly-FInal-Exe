import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import useModal from '../../Hooks/useModal/useModal';
import SupplierForm from './SupplierForm/SupplierForm';
import './SupplierRegisterModal.css';


const SupplierRegisterModal = ({ setAuth, }) => {
    const { isShowing, toggle } = useModal();
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

                        <SupplierForm setAuth={setAuth} />
                    </div>
                </div>
            </>)}
            <Button onClick={toggle} variant="work-with" sx={{ color: 'white', position: 'fixed', bottom: '30px', right: '50px' }}>Come Work With US!</Button>
        </>
    )
}
export default SupplierRegisterModal;