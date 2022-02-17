export const saveUserToLocalStorage = (userData) =>{
    localStorage.setItem("userDetails", JSON.stringify(userData));
}
export const getUserDetails = () =>{
    return JSON.parse(localStorage.getItem("userDetails"));
}
export const removeUserDetails = () =>{
    localStorage.removeItem("userDetails");

}