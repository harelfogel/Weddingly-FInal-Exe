import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { getUserDetails, saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig'

const useAuth = () => {
  const [authStatus, setAuthStatus] = useState("loading");

  useEffect(() => {
      const requestValid = async() =>{
          try{
              const userData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/validateToken`,{withCredentials: true})
              console.log(userData);
              console.log(getUserDetails());
              if(userData){
                  if(!getUserDetails()){
                    saveUserToLocalStorage(userData);
                  }
                  setAuthStatus("Authrized");
              }
              else{
                setAuthStatus("UnAuthrized");
              }
          }catch(e){
            setAuthStatus("UnAuthrized");
          }
        }
        requestValid();
  }, [])
  return [authStatus, setAuthStatus]
}

export default useAuth