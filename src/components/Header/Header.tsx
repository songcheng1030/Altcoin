import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '../../assets/images/icon/menu.svg'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import makeStyles from '@mui/styles/makeStyles';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Theme } from '@mui/material/styles';

const pages = ['Pleaceholder', 'Feature Your Coins', 'Add Coins', 'Charts'];

const useStyles = makeStyles((theme: Theme) => ({ 
  appbar: {
    backgroundColor: '#304FFE',
    height: '56px',
    paddingLeft: 22,
    paddingRight: 11,     
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#304FFE',
      height: '52px',
      paddingRight: 20,
      paddingLeft: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }, 
  container: {    
    padding: 0,
    margin: 0,    
  },
  toolbar: {   
    height: '56px',         
    [theme.breakpoints.up('md')]: {
      height: '52px',    
      display: 'flex',
      flexDirection: 'row',
      justfiyContent: 'space-between',      
    },
  }, 
  box: {
    marginLeft: 61,       
  }, 
  logo: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '160%',
      letterSpacing: '0.15px',
      color: '#FFFFFF'
    },
    display: 'none'
  }
}));

const Header = (props: {page: string}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles()
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appbar}>       
      <div className={classes.logo}>Altbase</div>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
        <IconButton onClick={handleClick} >              
          <img src={MenuIcon} alt=""/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> MY Profile
          </MenuItem>              
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            {pages[0]}
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {pages[1]}
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {pages[2]}
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {pages[3]}
          </MenuItem>          
        </Menu>
        <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <label style={{marginLeft: 10, color: 'white', fontSize: 20, fontWeight: 500, fontStyle: 'normal' }}>Placeholder</label>
        </Box>   
      </Box>             
      <Box sx={{width: '700px', alignItems: 'center',  display: { xs: 'none', md: 'flex' }}}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, fontSize: '14px', color: 'white', display: 'block'}}
            className={classes.box}
          >
            {page}
          </Button>
        ))}
      </Box>
      {/* <Box sx={{ flexGrow: 0, width: 200, height: 36, display: { xs: 'flex', md: 'none' } }}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />             
        </Paper>
      </Box>      */}
    </AppBar>
  );
};
export default Header;
