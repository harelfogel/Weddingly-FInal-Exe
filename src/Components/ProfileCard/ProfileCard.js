import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Icon from '@mui/material/Icon';
import './Profile.css';
import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';
//import BeautyStars from 'beauty-stars';
const API_URL = 'http://localhost:3200';


const ProfileCard = ({ rating, data }) => {
    const {name}=data;
    const {type}=data; 
    const {_id}=data;
    const {placeId} = data;
    const { isShowing, toggle } = useModal();
    const [value, setValue] = React.useState(rating ?? 2);
    const [rating_, setRating_] = useState(3);
    useEffect(() => {
        fetch(`${API_URL}/weddingly/ratings/${placeId}`)
            .then(res => (res.json()))
            .then((data) => {
                let counter = 0;
                console.log(data['rating']);
                if (data['rating'] < 4.1) {
                    setRating_(2);
                }
                if (data['rating'] >= 4.1) {
                    setRating_(3);
                }
                if (data['rating'] >= 4.5) {
                    setRating_(4);
                }
                if (data['rating'] > 5.2) {
                    setRating_(5);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <Box className="profile">
            <img className="img-style" src={data.photo ?? "https://picsum.photos/200/300"} />
            <Rating
                name="simple-controlled"
                value={rating_}
                onChange={(event, newValue) => {
                    setRating_(newValue);
                }}
            />
            <Typography color="secondary" fontWeight="bold" variant="h6" component="legend">{data.name ?? "Noname"}</Typography>
            <div className="open-modal">
                <button className="button-default" onClick={toggle}>Book Now</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    supplierId={_id}
                    supplierName={name}
                    supplierType={type}
                />
            </div>
            <Box sx={{ display: 'flex', align: 'center', color: 'secondary' }}>
                <Icon component={PinDropIcon} fontSize='small' color={"secondary"} />
                
                <Typography color="secondary" component="legend">
                    {data.location[0].city ?? "no location"}</Typography>
            </Box>
        </Box>
    );
};

export default ProfileCard;
