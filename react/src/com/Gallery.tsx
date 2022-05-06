import React from 'react';

import {styled} from "@mui/material/styles";
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Layout from './Container';
import {DolphinIcon, PathItem, Card} from './Card';
import {t_gallery_item, addGalleryItem, GalleryItem} from './GalleryItem';

import {
  t_instance,
  t_controller,
  Context,
  DefaultProps  
} from '../lib/Toolbox';

import config from '../config';


function populateGallery(
  list:Array<t_gallery_item>,
  thumbnailPath:string,
  filePath:string) {

  return list.map((item, index) => {
    return (
      <GalleryItem
        key={index}
        label={item.label}
        thumbnailPath={thumbnailPath}
        filePath={filePath}
        filename={item.filename} />
    );
  });
}

interface GalleryProps {
  title:string,
  subtitle:string,
  icon:React.ReactNode,
  banner:string,
  caption:string,
  path:React.ReactNode,
  thumbnailPath:string,
  filePath:string,
  list:Array<t_gallery_item>,
  children:React.ReactNode,
}
export default function Gallery(props:GalleryProps) {

  const style = {

    gallery: {width: '100%'},

    galleryInner: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '8px'
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,

      '@media (min-width: 600px)': {
        flexDirection: 'row',
        padding: '20px'
      }
    },

    columnLeft: {
      width: '100%',
      paddingRight: 0,

      '@media (min-width: 600px)': {
        width: '30%',
        paddingRight: '10px'
      }
    },

    columnRight: {
      width: '100%',
      paddingLeft: 0,

      '@media (min-width: 600px)': {
        width: '70%',
        paddingLeft: '10px'
      }
    },

    cardContent: {
      margin: 0,
      padding: '0 16px',
      fontSize: '16px'
    }
  };

  const Caption = styled('img')({
    display: 'block',
    width: '100%',
    borderRadius: 0,
    '@media (min-width: 600px)': {borderRadius: '8px'}
  });

  const Banner = styled('img')({
    display: 'none',
    width: '100%',
    '@media (min-width: 600px)': {display: 'block'}
  });

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,

    '@media (min-width: 600px)': {
      padding: '16px 16px 0px 16px',
    }
  });

  return (
    <Layout>
    <Container>
      <Card
        title={props.title}
        icon={props.icon}
        path={props.path}
      >
      <Banner src={config.PUBLIC_ROOT + props.banner} alt="" />
      <Box sx={style.container}>
      <Box sx={style.columnLeft}>
        <Caption src={config.PUBLIC_ROOT + props.caption} alt="" />
      </Box>

      <Box sx={style.columnRight}>
      <Card title={props.subtitle} variant="darkBlue">
        <CardContent sx={style.cardContent}>
        {props.children}
        </CardContent>
        </Card>
      </Box>
      </Box>

      </Card>
    </Container>

    <Box sx={style.gallery}>
    <Box sx={style.galleryInner}>
      {populateGallery(props.list, props.thumbnailPath, props.filePath)}
    </Box>
    </Box>
    </Layout>
  );
}

