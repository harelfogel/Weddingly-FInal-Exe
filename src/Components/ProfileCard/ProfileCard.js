import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Icon from '@mui/material/Icon';
import './Profile.css';

const ProfileCard = ({rating,title, location, imgURL}) => {
    const [value, setValue] = React.useState(rating ?? 2);
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '230px', height: '360px', mr: '10px'}}>
            <img className="img-style" src={imgURL ?? "https://picsum.photos/200/300"} />
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Typography color="secondary" fontWeight="bold" variant="h6" component="legend">{title ?? "Noname"}</Typography>
            <Box sx={{display: 'flex', align:'center', color:'secondary'}}>
                <Icon component={PinDropIcon} fontSize='small' color={"secondary"}/>
            <Typography color="secondary"  component="legend">
                {location ?? "no location, set"}</Typography>
            </Box>
        </Box>
    );
};

export default ProfileCard;
