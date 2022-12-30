import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Home', 'ContactUs','Sign-Up','Log-In'];


export default function FixedBottomNavigation() {
  const history = useNavigate();

  // const [messages, setMessages] = React.useState(() => refreshMessages());
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  // const history = useNavigate();
  const menuClicked= even =>{
    console.log(even)
    history("/"+even);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box style={{
      backgroundColor:' #1976d2',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CarRental
          </Typography>

          <Box sx={{ flexGrow: 4, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={e=>menuClicked(page)}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CarRental
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },alignItems:{md:"flex-start"} }}>
           
          </Box>

          <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }}}>
          {pages.map((page) => (
              <Button
                key={page}
                onClick={
                   e=> menuClicked(page)
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
                md={{alignItems:"right"} }
              >
                {page}
              </Button>
           ))}
          </Box>
        </Toolbar>
        <Typography variant='h5'><span >&copy;</span>2022</Typography>
      </Container>
    </Box>
  );
}

