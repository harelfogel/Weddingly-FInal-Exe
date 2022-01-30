import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Icon from '@mui/material/Icon';
import './Profile.css';
//import BeautyStars from 'beauty-stars';
const API_URL= 'http://localhost:3200';


const ProfileCard = ({rating, data}) => {
    console.log(API_URL);
    const [value, setValue] = React.useState(rating ?? 2);
    const [rating_, setRating_] = useState(3);
    const placeId=data.placeId;
    useEffect(() => {
        fetch(`${API_URL}/weddingly/ratings/${placeId}`)
        .then(res => (res.json()))
        .then((data) => {
            let counter=0;
            console.log(counter++);
            if(data['rating']<4.1){
                setRating_(2);
            }
             if (data['rating'] >= 4.1) {
                setRating_(3);
             }
             if (data['rating'] >= 4.5) {
                setRating_(4);
             }
             if (data['rating'] > 4.7) {
                setRating_(5);
             }
        })
        .catch((err) => {
              console.log(err);   
         });            
    },[])
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '230px', height: '330px', mr: '10px'}}>
            <img className="img-style" src={data.photo ?? "https://picsum.photos/200/300"} />
            <Rating
                name="simple-controlled"
                value={rating_}
                onChange={(event, newValue) => {
                    setRating_(newValue);
                }}
            />
            <Typography color="secondary" fontWeight="bold" variant="h6" component="legend">{data.name ?? "Noname"}</Typography>
            <Box sx={{display: 'flex', align:'center', color:'secondary'}}>
                <Icon component={PinDropIcon} fontSize='small' color={"secondary"}/>
            <Typography color="secondary"  component="legend">
                {data.location[0].city?? "no location, set"}</Typography>
            </Box>
        </Box>
    );
};

export default ProfileCard;
