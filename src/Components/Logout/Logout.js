import axios from 'axios'
import React, { useEffect } from 'react'
import { removeUserDetails } from '../../DataManager/LocalStorageConfig'

const Logout  = () => {
    useEffect(() => {   
        const logoutFromServer = async() =>{
            const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/logout`)
        }
        logoutFromServer();
        removeUserDetails();
       //window.location.replace('/');
    }, []);
    
  return (
   
    <div></div>
  )
}

export default Logout;