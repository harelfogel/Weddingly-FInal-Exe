import {toast } from 'react-toastify'
export const alertError = (message) =>{
    toast.error(message)
}

export const alertSucess = (message) =>{
    toast.success(message,{
        position: toast.POSITION.TOP_CENTER 
    });
}
