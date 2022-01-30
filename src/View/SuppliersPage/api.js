import axios from 'axios';
const API_URL='http://localhost:3200';

// const authAxios = (jwt) => axios.create({
//     withCredentials: true,
//     headers:{
//         "x-access-token": jwt
//     }
// })

export const fetchSuppliersByType = async(type) =>{
    const {data} = await axios.get(`${API_URL}/weddingly/suppliers/ByType/${type}`);
    return data.suppliers;
}
