import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Icon from '@mui/material/Icon';
import './Profile.css';
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import useModal from '../../Hooks/useModal/useModal';
import { FormControl, FormControlLabel, FormGroup, Switch, ToggleButton } from '@mui/material';
import axios from 'axios';
import EditSupplierModal from './EditSupplierModal/EditSupplierModal';


const ProfileCard = ({ rating, data, Manager }) => {
    const { fullName } = data;
    const { phone } = data;
    const { price } = data;
    const { type } = data;
    const { _id } = data;
    const { placeId } = data;
    const { isShowing, toggle } = useModal();
    const [value, setValue] = React.useState(rating ?? 2);
    const [rating_, setRating_] = useState(2);
    const [checked, setChecked] = useState(data.approved);

    console.log(data);

    const handleToggle = (event, value) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/${event.target.value}`, { approved: event.target.checked }, { withCredentials: true })
            .then(response => {
                setChecked(prev => !prev);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/weddingly/ratings/${placeId}`)
            .then(res => (res.json()))
            .then((data) => {
                if (data['rating'] <= 27.2) {
                    setRating_(3);
                }
                if ((data['rating'] >27.2) && (data['rating']<=35.5) ) {
                    setRating_(4);
                }
                if ((data['rating']>35.5)) {
                    setRating_(5);
                }
                if(!data['rating']){
                    setRating_(2);
                }

            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <Box className="profile">
            <img className="img-style" src={data.photo ?? "https://chrisandruth.com/wp-content/uploads/2020/04/tulum-wedding-photographer-2-1.jpg"} />
            <Rating
                name="read-only"
                value={rating_}
                onChange={(event, newValue) => {
                    setRating_(newValue);
                }}
                readOnly
            />
            <Typography color="secondary" fontWeight="bold" variant="h6" component="legend">{data.fullName ?? "Noname"}</Typography>
            {Manager ?

                <FormControl fullWidth component="div">
                    <FormGroup row>
                        <FormControlLabel sx={{ ml: 0 }}
                            value={data._id}
                            control={<Switch color="primary" />}
                            labelPlacement="start"
                            label="Approved ?"
                            checked={checked}
                            onChange={handleToggle}
                        />
                        <EditSupplierModal userId={data._id} />
                    </FormGroup>
                </FormControl>

                :

                <div className="open-modal">
                    <button className="button-default" onClick={toggle}>Book Now</button>
                    <AppointmentModal
                        isShowing={isShowing}
                        hide={toggle}
                        supplierId={_id}
                        supplierName={fullName}
                        supplierType={type}
                        supplierPrice={price}
                        supplierPhone={phone}
                    />
                </div>
            }
            <Box sx={{ display: 'flex', align: 'center', color: 'secondary' }}>
                <Icon component={PinDropIcon} fontSize='small' color={"secondary"} />

                <Typography color="secondary" component="legend">
                    {data.location[0].city ?? "no location"}</Typography>
            </Box>
        </Box>
    );
};

export default ProfileCard;
