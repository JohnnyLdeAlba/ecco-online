import React from 'react';

import {styled} from "@mui/material/styles";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';

import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';

import {Context} from '../lib/Toolbox';
import config from '../config';

interface ImageProps {src:string, onLoad:React.ReactEventHandler}
interface ImageEvent {stopPropagation:Function}

function Image(props:ImageProps) {

  const Image = styled('img')({
    cursor: 'default',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%',
    backgroundColor: '#000000',
    imageRendering: 'pixelated',
  });

  const ImageOnClick = (event:ImageEvent) => {
    event.stopPropagation();
  };

  return (
    <Image
      src={config.PUBLIC_ROOT + props.src}
      alt=""
      onLoad={props.onLoad}
      onClick={ImageOnClick} />
  );
}

export default function Portrait() {
 
  const instance = React.useContext(Context); 
  const controller = instance.getController('Portrait');

  const [backdropVisible, showBackdrop] = React.useState(false);

  controller.backdropVisible = backdropVisible;
  controller.showBackdrop = showBackdrop;

  const style = {
    backdrop: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      zIndex: config.zIndex.Portrait
    },

    toolbar: {
      boxSizing: 'border-box',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      bottom: 0,
      margin: '16px',
      borderRadius: '6px',
      backgroundColor: '#122348'
    },

    closeButton: {color: '#ffffff'},
    downloadButton: {color: '#ffffff'}
  };

  const BackdropOnClick = () => {
    controller.showBackdrop(!backdropVisible);
  };

  const onLoad = () => {
    instance.getController('Progress').show(false);
  }

  return (
    <Backdrop
      open={backdropVisible}
      transitionDuration={250}
      onClick={BackdropOnClick}
      sx={style.backdrop}>

      <Box sx={style.toolbar}>
        <IconButton sx={style.closeButton}>
          <CloseIcon />
        </IconButton>

        <IconButton href={config.PUBLIC_ROOT + controller.filename} sx={style.downloadButton}>
          <DownloadIcon />
        </IconButton>
      </Box>

      <Image src={controller.filename} onLoad={onLoad} />
    </Backdrop>
  );
}
