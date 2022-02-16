import { IconButton, Typography } from '@mui/material';
import React from 'react'
import useModal from '../../../Hooks/useModal/useModal';
import SupplierForm from '../../SupplierRegisterModal/SupplierForm/SupplierForm';
import CreateIcon from '@mui/icons-material/Create';

function EditSupplierModal({userId}) {
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
                                <Typography fontSize="18px" marginBottom="1rem"> Edit Supllier Details</Typography>
                            </div>
                        
                           <SupplierForm toggle={toggle} userId={userId}/>
                    </div>
                </div>
            </>)}
            <IconButton aria-label="update supplier" onClick={() =>toggle()} >
                        <CreateIcon/>
                    </IconButton>
        </>
    )
}

export default EditSupplierModal