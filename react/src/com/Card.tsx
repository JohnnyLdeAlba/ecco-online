import React from 'react';
import ReactDOM from 'react-dom';

import {styled, ThemeProvider} from "@mui/material/styles";
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Link,
  Route
} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Chip from '@mui/material/Chip';
import MUICard from '@mui/material/Card';
import MUICardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; 

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import config from '../config';

interface IconProps { src:string }
export function Icon(props:IconProps) {

  const Icon = styled('img')({
    width: '24px',
    filter: `
      invert(36%)
      sepia(99%)
      saturate(2870%)
      hue-rotate(187deg)
      brightness(91%)
      contrast(101%)`
  });

  return <Icon src={props.src} alt="" />
}

export const PathItem = styled('div')({
  padding: '0 4px',
  'a:link': {color: '#007cda', textDecoration: 'none'},
  'a:visited': {color: '#007cda', textDecoration: 'none'},
  'a:active': {color: '#007cda', textDecoration: 'none'},
  'a:hover': {color: '#007cda', textDecoration: 'none'}
});

export function DolphinIcon() {
  return <Icon src={config.PUBLIC_ROOT + "icons/dolphin-mammal-sea-creature-svgrepo-com.svg"} />
}

interface CardHeaderProps {
  title:string,
  icon:React.ReactNode|undefined
}

function CardHeader(props:CardHeaderProps) {

  const style = {
    cardHeader: {
      backgroundColor: '#122348',
      fontSize: '21px',
      color: '#ffffff',

      '.MuiCardHeader-title': {
        fontFamily: 'roboto-medium',
        fontSize: '16px'
      },

      '.MuiCardHeader-subheader': {
        color: '#ccccdd'
      }
    }
  };

  if (typeof props.icon == 'undefined') {
    return (
      <MUICardHeader
        title={props.title}
        sx={style.cardHeader}  
      />
    );
  }
  else {
    return (
      <MUICardHeader
        avatar={props.icon}
        title={props.title}
        sx={style.cardHeader}  
      />
    );
  }
}

interface CardPathProps {
  children?:React.ReactNode
}

function CardPath(props:CardPathProps) {

  const Path = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    padding: '12px',
    fontSize: '14px',
    color: '#ccccdd'
  });

  return (  
    <Path>
      <PathItem>
        <Link to={{pathname:config.PUBLIC_ROOT}}>Home</Link>
      </PathItem>
      {props.children}
    </Path>
  );
}

interface CardProps {
  title?:string|undefined,
  path?:React.ReactNode|undefined,
  icon?:React.ReactNode|undefined,
  variant?:string|undefined,
  children?:React.ReactNode
}

export function Card(props:CardProps) {

  const title = (typeof props.title == 'undefined') ? "" : props.title;

  const style = ((variant:string|undefined) => {

    const backgroundColor = (typeof props.variant == 'undefined') ?
      'rgba(0, 7, 26, 0.92)' : '#0c1730'; 

    return {
      card: {
        marginBottom: 0,
        borderRadius: 0,
        backgroundColor: backgroundColor,
        color: '#ffffff',

        '@media (min-width: 600px)': {
          borderRadius: '8px'
        }
      }
    };
  })(props.variant);

  if (typeof props.path == 'undefined') {

    return (
      <MUICard sx={style.card}>
        <CardHeader title={title} icon={props.icon} />
        {props.children}
      </MUICard>
    );
  }
  else {

    return (
      <MUICard sx={style.card}>
        <CardHeader title={title} icon={props.icon} />
        <CardPath>{props.path}</CardPath>
        {props.children}
      </MUICard>
    );
  }
}

