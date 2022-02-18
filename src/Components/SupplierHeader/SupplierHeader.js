import * as React from 'react';
import './SupplierHeader.css'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavLinkItem from './NavLinkItem';
import LoginModal from '../LoginModal/LoginModal';
import SupplierRegisterModal from '../SupplierRegisterModal/SupplierRegisterModal';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  backgroundColor: "#fff",
  '@media all': {
    minHeight: '8vh',
  }
}));

export default function SupplierHeader({ setAuth, authStatus }) {

  const user = (JSON.parse((localStorage.getItem('userDetails'))));
  let coupleName = '';
  if (user) {
    coupleName = user.brideName.substring(0, user.brideName.indexOf(' ')) + '&' + user.groomName.substring(-1, user.brideName.indexOf(' '));
  }
  else {
    coupleName = 'Weddingly';
  }

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLoggedIn = () => {
    setIsLoggedIn(true);

  }
  return (
    <Box>
      <AppBar position="static" >
        <StyledToolbar>
          <Box className="box-plot">
            <svg width="69" height="55" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="68.25" height="69" rx="10" fill="#B73058" />
              <rect y="10.6154" width="68.25" height="58.3846" rx="10" fill="#FF477E" />
              <path
                d="M48.405 28.7499C46.5499 26.8696 44.0909 25.722 41.4721 25.5143C38.8533 25.3066 36.2473 26.0527 34.125 27.6176C31.8984 25.9433 29.127 25.1841 26.3689 25.4928C23.6107 25.8016 21.0708 27.1555 19.2604 29.2817C17.4501 31.408 16.5039 34.1488 16.6124 36.9521C16.7209 39.7554 17.8759 42.4131 19.845 44.3899L30.7125 55.3945C31.6225 56.3 32.8482 56.8075 34.125 56.8075C35.4018 56.8075 36.6275 56.3 37.5375 55.3945L48.405 44.3899C50.4483 42.3116 51.5951 39.5003 51.5951 36.5699C51.5951 33.6396 50.4483 30.8283 48.405 28.7499V28.7499ZM45.9375 41.9484L35.07 52.9353C34.9463 53.0616 34.7991 53.1618 34.6369 53.2302C34.4747 53.2985 34.3007 53.3338 34.125 53.3338C33.9493 53.3338 33.7753 53.2985 33.613 53.2302C33.4508 53.1618 33.3037 53.0616 33.18 52.9353L22.3125 41.8953C20.9401 40.477 20.1716 38.5718 20.1716 36.5876C20.1716 34.6035 20.9401 32.6982 22.3125 31.2799C23.711 29.884 25.5972 29.1012 27.5625 29.1012C29.5278 29.1012 31.414 29.884 32.8125 31.2799C32.9752 31.4458 33.1687 31.5774 33.382 31.6672C33.5952 31.757 33.824 31.8033 34.055 31.8033C34.286 31.8033 34.5148 31.757 34.728 31.6672C34.9413 31.5774 35.1348 31.4458 35.2975 31.2799C36.696 29.884 38.5822 29.1012 40.5475 29.1012C42.5128 29.1012 44.399 29.884 45.7975 31.2799C47.1888 32.6797 47.9825 34.5746 48.0087 36.5588C48.0349 38.5429 47.2914 40.4586 45.9375 41.8953V41.9484Z"
                fill="white" />
            </svg>

            <Typography
              variant="h5"
              noWrap
              component="div"
              className="headline"
              sx={{ color: "#49516F", fontWeight: "bolder", fontSize: '2.5rem', ml: '1rem', mr: '3rem' }}
            >
              {authStatus == "Authrized" ? `${coupleName}` : "Weddingly"}
            </Typography>
            {authStatus == "Authrized" &&
              (<>
                <NavLinkItem to={'/Calendar'} text={"Meetings"} />
                <NavLinkItem to={'/Logout'} text={"Logout"} />
              </>)
            }
          </Box>
          {authStatus == "UnAuthrized" && <SupplierRegisterModal setAuth={setAuth} />}
          {authStatus == "UnAuthrized" && <LoginModal setAuth={setAuth} />}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
