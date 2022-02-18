import axios from 'axios'
import { useState, useEffect } from 'react'
import { getUserDetails, removeUserDetails, saveUserToLocalStorage } from '../../DataManager/LocalStorageConfig'

const useAuth = () => {
  const [authStatus, setAuthStatus] = useState("loading");

  useEffect(() => {

    const requestValid = async () => {
      try {
        const userData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/validateToken`, { withCredentials: true })
        if (userData) {
          removeUserDetails()
          if (!getUserDetails()) {
            saveUserToLocalStorage(userData.data);
          }
          setAuthStatus("Authrized");
        }
        else {
          setAuthStatus("UnAuthrized");
        }
      } catch (e) {
        setAuthStatus("UnAuthrized");
      }
    }
    requestValid();
  }, [])
  return [authStatus, setAuthStatus]
}

export default useAuth