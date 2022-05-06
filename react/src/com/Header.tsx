import React from 'react';

import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {styled} from "@mui/material/styles";

import {Icon} from './Drawer';
import {Context} from '../lib/Toolbox';
import config from '../config';

export default function Header() {

  const instance = React.useContext(Context);

  const style = {

    toolbar: {backgroundColor: '#122348'},

    box: {
      display: 'flex',
      flexDirection: 'row'
    },

    menuButton: {
      display: 'block',
      padding: '0 18px',
      borderRadius: '0',
      transition: '500ms' ,
      ':hover': {backgroundColor: '#004492'},
      '@media (min-width:1000px)': {display: 'none'}
    },

    subbox: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },

    toolbarItem: {
      padding: '24px 16px',
      borderRadius: '0',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      transition: '1s',
      ':hover': {backgroundColor: '#004492'}
    },

    toolbarIcon: {
      marginRight: '16px'

    }
  };

  const MenuButtonOnClick = () => {
    instance.toggleDrawer();
  };

  return (
    <AppBar position="static" sx={style.toolbar}>
      <Box sx={style.box}>
        <IconButton
          color="inherit"
          onClick={MenuButtonOnClick}
          sx={style.menuButton}>
          <MenuIcon />
        </IconButton>
        <Box sx={style.subbox}>
          <IconButton href="https://twitter.com/eccoonline" color="inherit" sx={style.toolbarItem}>
            <Icon src="icons/twitter.svg" />
            Twitter
          </IconButton>
          <IconButton href="https://discord.com/invite/ahCvaUB" color="inherit" sx={style.toolbarItem}>
            <Icon src="icons/discord.svg" />
            Discord
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}
