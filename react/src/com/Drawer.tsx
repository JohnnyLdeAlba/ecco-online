import React from 'react';

import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import MUIDrawer from '@mui/material/Drawer';
import MUILink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreIcon from '@mui/icons-material/Explore';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
  
import {styled} from "@mui/material/styles";

import Layout from './Container';
import Footer from './Footer';

import {
  t_instance,
  t_controller,
  Context,
  DefaultProps  
} from '../lib/Toolbox';

import config from '../config';

export function Logo() {

  const style = {
    box: {
      display: 'inline-block',
      marginLeft: '16px',
      width: '200px'
    }
  };

  const Logo = styled('img')({
    position: 'relative',
    top: '6px',
    width: '100%'
  });

  return (
    <Box sx={style.box}>
      <Logo src={config.PUBLIC_ROOT + "logo-glyph.svg"} alt="" />
    </Box>
  );
}

interface IconProps { src:string }
export function Icon(props:IconProps) {

  const Icon = styled('img')({
    marginRight: '16px',
    width: '24px',
    filter: `
      invert(36%)
      sepia(99%)
      saturate(2870%)
      hue-rotate(187deg)
      brightness(91%)
      contrast(101%)`
  });

  return <Icon src={config.PUBLIC_ROOT + props.src} alt="" />
}

export default function Drawer() {

  const navigate = useNavigate();
  const instance = React.useContext(Context);
  const controller = instance.getController('Drawer');
  const [visible, show] = React.useState(false);
  const [backdropVisible, showBackdrop] = React.useState(false);

  controller.visible = visible;
  controller.show = show;

  controller.backdropVisible = backdropVisible;
  controller.showBackdrop = showBackdrop;

  const style = {
    drawer: {
      zIndex: config.zIndex.Drawer,
      width: '280px',
      backgroundColor: 'rgba(0, 7, 26, 0.92);',
    },

    listIcon: {
      marginRight: '16px',
      color: '#007cda'
    },

    listLabel: {
      padding: '16px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#007cda',
      textTransform: 'uppercase',
    },

    listItem: {
      backgroundColor: 'transparent',
      fontSize: '14px',
      color: '#ffffff',
      transition: '500ms',
      ':hover': {backgroundColor: '#004492'},
    },

    accordion: {
      backgroundColor: 'transparent',
      fontSize: '14px',
      color: '#ffffff'
    },

    accordionItem: {color: '#ffffff'},

    expandIcon: {
      fontWeight: 'bold',
      color: '#ffffff'
    },

    accordionDetails: {
      padding: 0
    },

    accordionSubItem: {
      paddingLeft: '56px',
      transition: '500ms',
      ':hover': {backgroundColor: '#004492'}
    }
  };

  if (instance.intervalActive == false) {
  
    instance.intervalId = setInterval(() => {

      if (controller.windowWidth != window.innerWidth) {
        if (window.innerWidth >= 1000) {
          controller.show(true);
          controller.showBackdrop(false);
        }
        else {
          controller.show(false);
          controller.showBackdrop(false);
        }

        controller.windowWidth = window.innerWidth;
      }
    }, 250);

    instance.intervalActive = true;
  }

  const BackdropOnClick = () => {
    if (window.innerWidth >= 1000) {
      controller.show(true);
      controller.showBackdrop(false);
    }
    else {
      controller.show(false);
      controller.showBackdrop(false);
    }

    controller.windowWidth = window.innerWidth;
  };

  const getLink = (url:string) => {
    return () => {

      window.scrollTo(0,0);
      instance.intervalActive = false;
      clearInterval(instance.intervalId);
      controller.windowWidth = -1;
   
      navigate(config.PUBLIC_ROOT + url, {replace: true});
    };
  };

  let drawerVariant:'persistent'|'permanent' = 'persistent';

  if (window.innerWidth >= 1000) {
    controller.visible = true;
    controller.backdropVisible = false;
  }

  return (
    <Box>
    <Backdrop
      open={controller.backdropVisible}
      transitionDuration={500}
      onClick={BackdropOnClick}
      sx={{zIndex: config.zIndex.DrawerBackdrop}}
    />
    <MUIDrawer
      variant={drawerVariant}
      anchor="left"
      open={controller.visible}
      transitionDuration={500}
      PaperProps={{sx: style.drawer}}>
        <List>
          <ListItem onClick={BackdropOnClick} disableGutters disablePadding>
            <Logo />
          </ListItem>

          <ListItem button onClick={getLink('')} sx={style.listItem}>
            <HomeIcon sx={style.listIcon} /> 
            Home
          </ListItem>
{/*
          <ListItem component={MUILink} href="/about" button sx={style.listItem}>
            <PeopleAltIcon sx={style.listIcon} /> 
            About
          </ListItem>
*/}
{/*
          <ListItem button sx={style.listItem}>
            <SettingsIcon sx={style.listIcon} /> 
            Settings
          </ListItem>
*/}
          <ListItem button onClick={getLink('explore')}  sx={style.listItem}>
            <ExploreIcon sx={style.listIcon} /> 
            Explore
          </ListItem>

          <ListItem sx={style.listLabel}>
            Generators
          </ListItem>

          <ListItem component={MUILink} href="/ecco-text-generator" button sx={style.listItem}>
            <TextFieldsIcon sx={style.listIcon} /> 
            Ecco Text Generator
          </ListItem>

          <ListItem component={MUILink} href="/ecco-password-generator" button sx={style.listItem}>
            <KeyIcon sx={style.listIcon} /> 
            Ecco Password Generator
          </ListItem>

          <ListItem component={MUILink} href="/ecco2-password-generator" button sx={style.listItem}>
            <LockIcon sx={style.listIcon} /> 
            Ecco 2 Password Generator
          </ListItem>

          <ListItem sx={style.listLabel}>
            Ecco the Dolphin
          </ListItem>

          <Accordion sx={style.accordion} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={style.expandIcon} />}
               sx={style.accordionItem}>
              <Icon src="icons/dolphin-mammal-sea-creature-svgrepo-com.svg" /> 
              Ecco the Dolphin
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <ListItem button onClick={getLink('ecco-the-dolphin/sprites')} sx={style.accordionSubItem}>
                Sprites
              </ListItem>
              <ListItem button onClick={getLink('ecco-the-dolphin/sonar-maps')} sx={style.accordionSubItem}>
                Sonar Maps
              </ListItem>
              <ListItem button onClick={getLink('ecco-the-dolphin/level-maps')} sx={style.accordionSubItem}>
                Level Maps
              </ListItem>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={style.accordion} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={style.expandIcon} />}
               sx={style.accordionItem}>
              <Icon src="icons/dolphin-mammal-sea-creature-svgrepo-com.svg" /> 
              Ecco the Dolphin PC
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <ListItem button onClick={getLink('ecco-the-dolphin-pc/sprites')} sx={style.accordionSubItem}>
                Sprites
              </ListItem>
              <ListItem button onClick={getLink('ecco-the-dolphin-pc/level-maps')} sx={style.accordionSubItem}>
                Level Maps
              </ListItem>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={style.accordion} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={style.expandIcon} />}
               sx={style.accordionItem}>
              <Icon src="icons/dolphin-mammal-sea-creature-svgrepo-com.svg" /> 
              Ecco 2: The Tides of Time
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <ListItem button onClick={getLink('ecco-2-the-tides-of-time/sprites')} sx={style.accordionSubItem}>
                Sprites
              </ListItem>
              <ListItem button onClick={getLink('ecco-2-the-tides-of-time/sonar-maps')} sx={style.accordionSubItem}>
                Sonar Maps
              </ListItem>
              <ListItem button onClick={getLink('ecco-2-the-tides-of-time/level-maps')} sx={style.accordionSubItem}>
                Level Maps
              </ListItem>
              <ListItem button onClick={getLink('ecco-2-the-tides-of-time/object-maps')} sx={style.accordionSubItem}>
                Object Maps
              </ListItem>
              <ListItem button onClick={getLink('ecco-2-the-tides-of-time/object-maps')} sx={style.accordionSubItem}>
                Exclusive: Ecco 2 for Master System Revision 2
              </ListItem>

            </AccordionDetails>
          </Accordion>

          <Accordion sx={style.accordion} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={style.expandIcon} />}
               sx={style.accordionItem}>
              <Icon src="icons/whale-big-animal-giant-svgrepo-com.svg" /> 
              Ecco Jr.
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <ListItem button onClick={getLink('ecco-jr/level-maps')} sx={style.accordionSubItem}>
                Level Maps
              </ListItem>
            </AccordionDetails>
          </Accordion>

          <ListItem sx={style.listLabel}>
            Social
          </ListItem>

          <ListItem component={MUILink} href="https://twitter.com/eccoonline" button sx={style.listItem}>
            <Icon src="icons/twitter.svg" />
            Twitter
          </ListItem>

          <ListItem component={MUILink} href="https://discord.com/invite/ahCvaUB" button sx={style.listItem}>
            <Icon src="icons/discord.svg" />
            Discord
          </ListItem>

      </List>
    </MUIDrawer>
    </Box>
  );
}
