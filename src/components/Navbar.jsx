import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const pages = ['Главная', 'Каталог'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  // localStorage.getItem('username') ? (

  // ) : (
  // )

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: "block" }}>
            <ArrowBackIosIcon sx={{ display: { xs: 'none', md: 'flex' }, color: "white" }} onClick={() => navigate(-1)} />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ArrowBackIosIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              key={1}
              onClick={() => {
                handleCloseNavMenu();
                navigate("/")
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Главная
            </Button>
            <Button
              key={2}
              onClick={() => {
                handleCloseNavMenu();
                navigate("/catalog")
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Каталог
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }} >

            {
              localStorage.getItem('email') ? (
                <IconButton onClick={() => {
                  // handleOpenUserMenu();
                  navigate("/profile");
                }} sx={{ p: 0 }} >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              ) : (
                <Button variant="text" sx={{ color: "#FFF" }} onClick={() => navigate('/register')}>
                  Войти
                </Button>
              )
            }


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
