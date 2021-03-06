import React, { useEffect, useState } from 'react';
import {Box} from '@mui/material';
import FormField from '../../Components/FormField/FormField';
import SuppliersNavBar from '../../Components/SuppliersNavBar/SuppliersNavBar';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import { fetchSuppliersByType } from './api';

const SuppliersPage = (props) => {
    const [selectedLink, setSelectedLink] = useState('Photographers');
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [suppliers, setSuppliers] = useState([])
    const supplierDict = {
        "Photographers":"Photographer",
        "Catrings":"Catring",
        "DJs":"DJ",
        "Wedding-Halls":"Wedding Hall"
    }
    useEffect(() => {
      const fetchInitialSuppliers = async() =>{
        let fetchedSuppliers = await fetchSuppliersByType(supplierDict[selectedLink])
        if(!props.Manager){
            fetchedSuppliers = fetchedSuppliers.filter(s => s.approved)
        }
        setSuppliers(fetchedSuppliers);
        setFilteredSuppliers(fetchedSuppliers);
      }
      fetchInitialSuppliers()
    }, [selectedLink, suppliers]);

    const onSearchTypeingHandler = (text) =>{
        setSearchText(text)
        if(text === ''){
            setFilteredSuppliers(suppliers)
        }else{
            setFilteredSuppliers(prev => prev.filter(supplier => supplier.fullName.toLowerCase().includes(text)))
        }
    } 
    return (
        <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', padding: '1rem 7%' }}>
        {props.Manager}
            <Box sx={{ width: '100%', display: 'flex', flexBasis: '15%', justifyContent: 'center', alignItems: 'center' }}>
                <FormField label="Supplier Name" width={"25%"} value={searchText} OnChangeHandler={onSearchTypeingHandler} />
            </Box>
            <SuppliersNavBar items={supplierDict} selected={selectedLink} setSelectedLink={setSelectedLink} />
            <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', mt: '5%' }}>
            {
                filteredSuppliers.length !== 0 && filteredSuppliers.map((supplier) => {
                    return <ProfileCard setSuppliers={setSuppliers}  Manager={props.Manager} data={supplier} />;
                })
            }
            </Box>  
        </Box>
        
    );
};

export default SuppliersPage;


