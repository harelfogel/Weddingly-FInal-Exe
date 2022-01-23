import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import FormField from '../../Components/FormField/FormField';
import SuppliersNavBar from '../../Components/SuppliersNavBar/SuppliersNavBar';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';

const SuppliersPage = () => {
    const [selectedLink, setSelectedLink] = React.useState('Suppliers');
    const links = ['Suppliers', 'Products', 'Orders'];
    return (
        <Box sx={{width: '100%', height: '90vh', display: 'flex', flexDirection:'column', padding: '1rem 7%'}}>
        <Box sx={{width: '100%', display: 'flex', flexBasis: '15%', justifyContent: 'center', alignItems: 'center'}}>
            <FormField label="Supplier Name" width={"25%"}/>
            <Button variant="contained">
                <Icon component={SearchIcon} fontSize='medium' />
            </Button>
        </Box>
            <SuppliersNavBar items={links} selected={selectedLink} setSelectedLink={setSelectedLink}/>
            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', mt: '5%'}}>
                <ProfileCard rating={5} title="TEST" location="israel, jerusalem" imgURL={undefined} />
            <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard /><ProfileCard />
                <ProfileCard />
                <ProfileCard /><ProfileCard /><ProfileCard /><ProfileCard /><ProfileCard /><ProfileCard />

        </Box>
        </Box>
    );
};

export default SuppliersPage;
