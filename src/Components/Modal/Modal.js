import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';


const validationSchema = yup.object({
  comments: yup
    .string('comment have to be text')
    .min(5, "you must enter at least 5 chars")
});


const Modal = ({ isShowing, hide, supplierId, supplierName, supplierType }) => {
  const [appoointmentDate, setAppoointmentDate] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  const formik = useFormik({
    initialValues: {
      comments: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/${supplierId}`, {
          meeting: {
            ...values,
            date: appoointmentDate,
            email: 'email@gmail.com'
          }
        })
        const resposnse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/customers/appoitments/61f2e82858402b5f360b89ac`, {
          meetingSupplierId: supplierId,
          meetingSupplierName: supplierName,
          meetingDate: appoointmentDate,
          meetingSupplierType: supplierType
        })
        console.log(resposnse);
      } catch (e) {
        alert('Error has occured');
      }


      //console.log(data);
      // meetingSupplierId: req.body.meetingSupplierId,
      //       meetingSupplierName: splitStringBetweenUppercase(req.body.meetingSupplierName),
      //       meetingDate: req.body.meetingDate,
      //       meetingSupplierType:req.body.type
    },

  })
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="appoitment-form" onSubmit={formik.handleSubmit}>
            <Calendar datePicked={appoointmentDate} setDate={setAppoointmentDate} />
            <TextField
              name="comments"
              label="add comments to the supplier"
              value={formik.values.comments}
              onChange={formik.handleChange}
              error={formik.touched.comments && Boolean(formik.errors.comments)}
              helperText={formik.touched.comments && formik.errors.comments}
            />
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

}

export default Modal;