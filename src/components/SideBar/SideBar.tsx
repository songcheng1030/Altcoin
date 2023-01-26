import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '../../assets/images/icon/menu.svg'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoImage from '../../assets/images/logo/logo.png'
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Explore', 'Promote', 'Newsfeed', 'Learn', 'Charts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles((theme: Theme) => ({ 
  appbar: {
    backgroundColor: '#1976D2',
    height: 56,
    paddingLeft: 22,
    paddingRight: 11,
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'white',
      height: 72,
      paddingRight: 22,
      paddingLeft: 22,
    },
  }, 
  container: {    
    padding: 0,
    margin: 0,    
  },
  toolbar: {   
    minHeight: 56,     
    [theme.breakpoints.up('md')]: {
      minHeight: 64      
    },
  }, 
  box: {
    marginLeft: 61,       
  }, 
  logo: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    display: 'none'
  }
}));

const SideBar = () => {
  

  return (
    <div> </div>
  );
};
export default SideBar;
