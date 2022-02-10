import axios from 'axios';

// const authAxios = (jwt) => axios.create({
//     withCredentials: true,
//     headers:{
//         "x-access-token": jwt
//     }
// })

export const fetchSuppliersByType = async(type) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/ByType/${type}`);
    return data.suppliers;
}
