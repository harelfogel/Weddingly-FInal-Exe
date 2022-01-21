import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  backgroundColor:"#fff",
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: '8vh',
    
  },
}));

export default function Header() {
  return (
    <Box>
      <AppBar position="static" flexGrow='1' >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 , color:'#FF477E' }}
          >
          <FavoriteBorderIcon/>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color:"#49516F", fontWeight:"800" }}
          >
            Weddingly
          </Typography>
          <Button variant="contained">Log In</Button>
          <Button variant="contained">Log In</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
