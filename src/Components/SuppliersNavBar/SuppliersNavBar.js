import React from 'react';
import { Box } from '@mui/material';
import LinkItem from './LinkItem';
import {fetchSuppliersByType} from '../../View/SuppliersPage/api'
import './Suppliers.css'

const SuppliersNavBar = ({items, selected, setSelectedLink}) => {
    const onClickHandler = async (text) =>{
        setSelectedLink(text)
        const suppliers = await fetchSuppliersByType(items[text]);
    }
    return (
        <Box  sx={{width: '100%', display: 'flex', flexBasis: '5%', justifyContent: 'flex-start'}}>
            {Object.keys(items).map((text, index) => {
                return (
                    <LinkItem key={text} text={text} Selected={selected} onClickHandler={onClickHandler}/>
                )
            })}
        </Box>
    );
};

export default SuppliersNavBar;
