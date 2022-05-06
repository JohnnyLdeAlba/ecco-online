import React from 'react';

import {styled, ThemeProvider} from "@mui/material/styles";
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';

import {DolphinIcon, PathItem} from '../com/Card';
import {t_gallery_item, addGalleryItem} from '../com/GalleryItem';
import {Context, H2, H3, Subheader, A, S, P, Media, Image, Collage} from '../lib/Toolbox';
import Gallery from '../com/Gallery';

import config from '../config';

function getGalleryItems() {

  const list:Array<t_gallery_item> = new Array();

  addGalleryItem(list, 'Asterite', 'asterite.png');
  addGalleryItem(list, 'Asterite BG', 'asterite-background.png');
  addGalleryItem(list, 'Big Ship', 'big-ship.png');
  addGalleryItem(list, 'Big Ship BG', 'big-ship-background.png');
  addGalleryItem(list, 'CBuild', 'cbuild.png');
  addGalleryItem(list, 'CBuild', 'cbuild-background.png');
  addGalleryItem(list, 'CLantis', 'clantis.png');
  addGalleryItem(list, 'CLantis BG', 'clantis-background.png');
  addGalleryItem(list, 'CTime1', 'ctime1.png');
  addGalleryItem(list, 'CTime1 BG', 'ctime1-background.png');
  addGalleryItem(list, 'CTime2', 'ctime2.png');
  addGalleryItem(list, 'CTime2 BG', 'ctime2-background.png');
  addGalleryItem(list, 'Deep', 'deep.png');
  addGalleryItem(list, 'Deep BG', 'deep-background.png');
  addGalleryItem(list, 'DeepWS', 'deepws.png');
  addGalleryItem(list, 'DeepWS BG', 'deepws-background.png');
  addGalleryItem(list, 'Ed', 'ed.png');
  addGalleryItem(list, 'Ed BG', 'ed-background.png');
  addGalleryItem(list, 'Hajo', 'hajo.png');
  addGalleryItem(list, 'Hajo BG', 'hajo-background.png');
  addGalleryItem(list, 'Home', 'home.png');
  addGalleryItem(list, 'Home BG', 'home-background.png');
  addGalleryItem(list, 'Horse', 'horse.png');
  addGalleryItem(list, 'Horse BG', 'horse-background.png');
  addGalleryItem(list, 'Ice01', 'ice01.png');
  addGalleryItem(list, 'Ice01 BG', 'ice01-background.png');
  addGalleryItem(list, 'Ice03', 'ice03.png');
  addGalleryItem(list, 'Ice03 BG', 'ice03-background.png');
  addGalleryItem(list, 'IWhale', 'iwhale.png');
  addGalleryItem(list, 'IWhale BG', 'iwhale-background.png');
  addGalleryItem(list, 'Korall2', 'korall2.png');
  addGalleryItem(list, 'Korall2 BG', 'korall2-background.png');
  addGalleryItem(list, 'Laci', 'laci.png');
  addGalleryItem(list, 'Laci BG', 'laci-background.png');
  addGalleryItem(list, 'Medusa', 'medusa.png');
  addGalleryItem(list, 'Medusa BG', 'medusa-background.png');
  addGalleryItem(list, 'Ocean', 'ocean.png');
  addGalleryItem(list, 'Ocean BG', 'ocean-background.png');
  addGalleryItem(list, 'Ocean2', 'ocean2.png');
  addGalleryItem(list, 'Ocean2', 'ocean2-background.png');
  addGalleryItem(list, 'Pre', 'pre.png');
  addGalleryItem(list, 'Pre BG', 'pre-background.png');
  addGalleryItem(list, 'PreAster', 'preaster.png');
  addGalleryItem(list, 'PreAster BG', 'preaster-background.png');
  addGalleryItem(list, 'RowMat', 'rowmat.png');
  addGalleryItem(list, 'RowMat BG', 'rowmat-background.png');
  addGalleryItem(list, 'Szikla', 'szikla.png');
  addGalleryItem(list, 'Szikla BG', 'szikla-background.png');
  addGalleryItem(list, 'Tunnel', 'tunnel.png');
  addGalleryItem(list, 'Tunnel BG', 'tunnel-background.png');
  addGalleryItem(list, 'Turtle', 'turtle.png');
  addGalleryItem(list, 'Turtle BG', 'turtle-background.png');
  addGalleryItem(list, 'VBig', 'vbig.png');
  addGalleryItem(list, 'VBig BG', 'vbig-background.png');
  addGalleryItem(list, 'VBos', 'vbos.png');
  addGalleryItem(list, 'VBos BG', 'vbos-background.png');
  addGalleryItem(list, 'VTube BG', 'vtube-background.png');
  addGalleryItem(list, 'VTube', 'vtube.png');
  addGalleryItem(list, 'Zsolot', 'zsolt.png');
  addGalleryItem(list, 'Zsolt BG', 'zsolt-background.png');

  return list;
}

export default function EccoPCLevelMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco the Dolphin</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Level Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco the Dolphin PC : Level Maps"
      subtitle="Level Maps"
      icon={<DolphinIcon />}
      banner="ecco-the-dolphin-pc/level-maps/banner.png"
      caption="ecco-the-dolphin-pc/title-screen.png"
      path={Path}
      thumbnailPath="ecco-the-dolphin-pc/level-maps/thumbnails/"
      filePath="ecco-the-dolphin-pc/level-maps/"
      list={list}           
    >
<P>
A collection of level maps from Ecco the Dolphin PC. This version of the game is unique for its high resolution mode. For that mode the overall graphics were doubled in size and partially redrawn. There is no parallax effect for backgrounds while in high resolution mode. Instead newer backgrounds were created to fit the size of the stage.
</P>

<P>
I would like to thank Leia Ivon Flame of RedDashGames whose research contributed toward the creation of the extraction tool that generated these maps.
</P>

    </Gallery>
  );
}


