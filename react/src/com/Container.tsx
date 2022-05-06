import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import {styled, ThemeProvider} from "@mui/material/styles";

import Portrait from './Portrait';
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';

import {t_instance, Context, DefaultProps} from '../lib/Toolbox';

import theme from '../theme';
import config from '../config';

function Progress() {

  const instance = React.useContext(Context);
  const controller = instance.getController('Progress');

  const [visible, show] = React.useState(false);
  const display = visible ? 'block' : 'none';

  controller.visible = visible;
  controller.show = show;

  return (
    <CircularProgress size={60} disableShrink sx={{
      display: display,
      position: 'fixed',
      top: 'calc((100% - 60px)/2)',
      left: 'calc((100% - 60px)/2)',
      zIndex: config.zIndex.Progress
    }} />
  );
}

export function Container(props:DefaultProps) {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0px',
    height: '100vh',

    '@media (min-width:1000px)': {
      marginLeft: '280px'
    }
  };

  return (<Box sx={style}>{props.children}</Box>);
}

export function Body(props:DefaultProps) {
  const style = {flex: 1};
  return (<Box sx={style}>{props.children}</Box>);
}

export default function Layout(props:DefaultProps) {

  return (
    <>
    <Progress />
    <Portrait />
    <Drawer />
    <Container>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </Container>
    </>
  );
}
