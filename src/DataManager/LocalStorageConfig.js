export const saveUserToLocalStorage = (userData) =>{
    localStorage.setItem("userDetails", userData)
}
export const getUserDetails = () =>{
    localStorage.getItem("userDetails");
}
export const removeUserDetails = () =>{
    localStorage.removeItem("userDetails");

}