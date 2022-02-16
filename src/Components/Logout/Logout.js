import axios from 'axios'
import React, { useEffect } from 'react'
import { removeUserDetails } from '../../DataManager/LocalStorageConfig'
import { alertError } from '../AlertToast/AlertToast';

const Logout  = ({setAuthStatus}) => {
    useEffect(() => {   
        const logoutFromServer = async() =>{
          try{
            const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/logout`,{},{withCredentials:true})
            console.log(data);
          }catch(e){
            alertError('Error! Cant log out');
          }
        }
        setAuthStatus('UnAuthrized');
        logoutFromServer();
        removeUserDetails();
         window.location.replace('/');
    }, []);
    
  return (
   
    <div></div>
  )
}

export default Logout;