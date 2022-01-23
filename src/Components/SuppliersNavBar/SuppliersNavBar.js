import React from 'react';
import { Box } from '@mui/material';
import LinkItem from './LinkItem';
import './Suppliers.css'

const SuppliersNavBar = ({items, selected, setSelectedLink}) => {
    return (
        <Box  sx={{width: '100%', display: 'flex', flexBasis: '5%', justifyContent: 'flex-start'}}>
            {items.map((text, index) => {
                return (
                    <LinkItem key={text} text={text} Selected={selected} setSelectedLink={setSelectedLink}/>
                )
            })}
        </Box>
    );
};

export default SuppliersNavBar;
