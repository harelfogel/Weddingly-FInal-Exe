import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Autocomplete, Button, TextField } from '@mui/material';
import FormField from '../../FormField/FormField';
import './SupplierForm.css';
import { alertError, alertSucess } from '../../AlertToast/AlertToast';
import { saveUserToLocalStorage } from '../../../DataManager/LocalStorageConfig';
import { useNavigate } from 'react-router-dom';


  const initialValue =  {
    fullName: "",
    email:  "",
    price: "",
    phone:  "",
    photo: "",
    password: "",
    location:"",
    placeId: "",
    roles: "supplier",
}
  
export default function SupplierForm({ setAuth, userId, toggle }) {
    const [type, setType] = useState("")
    const [supplierInitialValues, setSupplierInitialValues] = useState()
    const [validationSchema, setValidationSchema] = useState( yup.object({
      fullName: yup.string().required("you must enter full name "),
      email:  yup.string().email("must be a valid email").required("you must enter "),
      price:  yup.number("price of charge must be a number").required("you must enter a price"),
      phone:  yup.string().required("you must enter phone "),
      photo:  yup.string().required("you must enter "),
      password: yup.string().required("you must enter "),
      location: yup.string().required("you must enter "),
      placeId:  yup.string().required("you must enter "),
      roles: yup.string().required("you must enter "),
    }))
    const navigate = useNavigate()
    const OnChangeProfessionHandler = (e,professionEvent) => {
        try {
          if (professionEvent) {
            setType(professionEvent);
          } else {
            throw 'Bad profession input';
          }
        } catch(e){
          alertError(e);
        }
      }
      const formFields = {
        fullName: "enter full name",
        email:  "email",
        price: "price",
        phone:  "phone",
        photo: "photo",
        password: "password",
        location: "location",
        placeId: "Place",
      }
      useEffect(() => {
        const getSupplierDetails = async() =>{
          if(userId){
            try{
              const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/${userId}`)
              console.log(data)
              setSupplierInitialValues({
                fullName: data.fullName,
                email:  data.email,
                price: data.price.split(" ILS")[0],
                phone: data.phone ,
                photo: data.photo,
                location: `${data.location[0].city}` ,
                placeId: data.placeId ,
              })
              setValidationSchema( yup.object({
                fullName: yup.string().required("you must enter full name "),
                email:  yup.string().email("must be a valid email").required("you must enter "),
                price:  yup.number("price of charge must be a number").required("you must enter a price"),
                phone:  yup.string().required("you must enter phone "),
                photo:  yup.string().required("you must enter "),
                location: yup.string().required("you must enter "),
                placeId:  yup.string().required("you must enter "),
              }))
              setType(data.type)
            }catch(e){
              alertError('Error! Cant get supplier details');

            }
          }
        }
        getSupplierDetails() 
      },[])
    const formik = useFormik({
        initialValues:supplierInitialValues ?? initialValue,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          let data = {...values, type, appointment: []}
          console.log("hellosa")
            if(userId){
              data = {...values, type, location:[{city: values.location}],}
            }
          try {
            if(userId){
              axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/${userId}`, { ...data }, { withCredentials: true })
              .then(response => {
                alertSucess('You Have Updated The Supplier Profile');
                toggle()
                setTimeout(() =>
                {window.location.reload()},1000)
              })
            }else
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/auth/signup`, { ...data }, { withCredentials: true })
          .then(response => {
            saveUserToLocalStorage(response.data);
            setAuth("Authrized");
            alertSucess('Your request is sent to the system');
            navigate('/Calendar')
          })

          } catch (e) {
            alertError('Error! Cant add meeting');
          }
        }, enableReinitialize: true})
    
  return(
              <form className="registration-form" onSubmit={formik.handleSubmit}>

              {Object.keys(formFields).map(elem => {
                if(userId){
                  if(elem == 'password')
                  return;
                }
                return (
                  (
                <TextField 
                className='fields-form'
                key={elem}
                 name={elem}
              label={`${formFields[elem]}`}
              value={formik.values[elem]}
              onChange={formik.handleChange}
              error={formik.touched[elem] && Boolean(formik.errors[elem])}
              helperText={formik.touched[elem] && formik.errors[elem]} />
              )
                )
              })}
              <Autocomplete onChange={OnChangeProfessionHandler} value={type} disablePortal options={["Photographer","Dj","Wedding hall"]} sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Type" />}/>
        <Button color="primary" variant="contained" type="submit" sx={{ marginTop: '2rem' }}>{setAuth == undefined ? "Done edit" : "Join us!"}</Button>
              </form>)
           

}
