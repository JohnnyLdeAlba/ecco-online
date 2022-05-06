import React from 'react';

import {styled} from "@mui/material/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {Context} from '../lib/Toolbox';
import config from '../config';

export class t_gallery_item {

  label:string;
  filename:string;

  constructor(
    label:string,
    filename:string) {

    this.label = label;
    this.filename = filename;
  }
}

export function addGalleryItem(
  list:Array<t_gallery_item>,
  label:string,
  filename:string) {

  list.push(new t_gallery_item(label, filename));
}

interface ThumbnailProps { src:string }
function Thumbnail(props:ThumbnailProps) {

  const Thumbnail = styled('img')({
    position: 'relative',
    display: 'block',
    padding: '8px',
    width: '100%',
    imageRendering: 'pixelated',
  });

  return (<Thumbnail src={config.PUBLIC_ROOT + props.src} alt="" />);
}

interface PropsGalleryItem {
  label:string,
  thumbnailPath:string,
  filePath:string,
  filename:string
}

export function GalleryItem(props:PropsGalleryItem) {

  const instance = React.useContext(Context);

  const style = {

    container: {
      width: '50%',

      '@media (min-width: 600px)': {width: '50%'},
      '@media (min-width: 800px)': {width: '33%'},
      '@media (min-width: 1100px)': {width: '25%'},
      '@media (min-width: 1400px)': {width: '20%'},
    },

    containerInner: {padding: '8px'},

    galleryItem: {
      cursor: 'pointer',
      userSelect: 'none',
      display: 'block',
      padding: 0,
      width: '100%',
      borderRadius: '6px',
      backgroundColor: 'rgba(0, 7, 26, 0.92)',
      overflow: 'hidden',

      transition: '500ms',
      ':hover': {backgroundColor: '#004492'}
    },

    header: {
      padding: '8px',
      border: '1px solid #122348',
      borderWidth: '0 0 1px 0',
      fontFamily: 'roboto-medium',
      fontSize: '14px',
      color: '#ccccdd',
      textAlign: 'center'
    }
  };

  const ButtonOnClick = () => {

    const controller = instance.getController('Portrait');

    controller.filename = props.filePath + props.filename;
    instance.getController('Progress').show(true);
    controller.showBackdrop(true);
  };

  return (
    <Box sx={style.container}>
    <Box sx={style.containerInner}>
    <Button onClick={ButtonOnClick} sx={style.galleryItem}>
        <Box sx={style.header}>
          {props.label}
        </Box>
        <Thumbnail src={props.thumbnailPath + props.filename} />
      </Button>
    </Box>
    </Box>
  );
}

