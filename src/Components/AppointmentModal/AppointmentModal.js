import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../Calendar/Calendar';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { getUserDetails } from '../../DataManager/LocalStorageConfig';
import { alertError, alertSucess } from '../AlertToast/AlertToast';
import { ImPhone } from 'react-icons/im';
import { GiTwoCoins } from 'react-icons/gi';
import { Navigate, useNavigate } from 'react-router';

const validationSchema = yup.object({
  comments: yup
    .string('comment have to be text')
    .min(5, "you must enter at least 5 chars")
});

const AppointmentModal = ({ isShowing, hide, supplierId, supplierName, supplierType, supplierPhone, supplierPrice }) => {
  const user = (JSON.parse((localStorage.getItem('userDetails'))));
  const [userAppointemnt, setUserAppoitment] = React.useState([]);
  React.useEffect(() => {
    setUserAppoitment(user.appointment.filter((elem) => {
      return elem.approved == false;
    }))
  }, [])
  const userId = user._id;
  const userEmail = user.email;
  const navigate = useNavigate();
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
            clientId: userId,
            email: userEmail,
            name: user.brideName,
            appointemntId:""
          }

        })
        const resposnse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/weddingly/customers/appoitments/${userId}`, {
          meetingSupplierId: supplierId,
          meetingSupplierName: supplierName,
          meetingDate: appoointmentDate,
          meetingSupplierType: supplierType,
          supplierMeetingId: data.meeting[data.meeting.length - 1]._id
        })
        const updateId = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/meetings/${supplierId}/${data.meeting[data.meeting.length - 1]._id}/${resposnse.data.appointment[resposnse.data.appointment.length - 1]._id}`)
        if (data && resposnse) {
          alertSucess(`Meeting request sent to ${supplierName}`);
          hide();
        }
      } catch (e) {
        console.log(e)
        alertError('Error! Cant add meeting');
      }
    },

  })
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="appoitment-modal-header">
            <div className="appointment-modal-headline">
              <Typography variant={'h6'}>Meeting {supplierName}:</Typography>
            </div>
          </div>

          <div className="supplier-additional-details">
            <Typography
              className="details-headline" variant={'h8'}>
              <div className="phone-icon">
                <ImPhone />
              </div>
              {supplierPhone}
            </Typography>
            <Typography
              className="price-details-headline" variant={'h8'}>
              <div className="price-icon">
                <GiTwoCoins />
              </div>
              {supplierPrice}
            </Typography>
          </div>
          <form className="appoitment-form" onSubmit={formik.handleSubmit}>
            <Calendar datePicked={appoointmentDate} setDate={setAppoointmentDate} />
            <TextField
              name="comments"
              label="Any comments?"
              value={formik.values.comments}
              onChange={formik.handleChange}
              error={formik.touched.comments && Boolean(formik.errors.comments)}
              helperText={formik.touched.comments && formik.errors.comments}
            />
            <div className="button-appoitment-modal">
              <Button color="primary" variant="contained" type="submit" >
                Get a Meeting!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

}

export default AppointmentModal;