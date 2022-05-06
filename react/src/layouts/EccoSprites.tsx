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

  addGalleryItem(list, 'Alphabet', 'alphabet.png');
  addGalleryItem(list, 'Artic Spider', 'artic-spider.png');
  addGalleryItem(list, 'Bubbles', 'bubbles.png');
  addGalleryItem(list, 'Crab', 'crab.png');
  addGalleryItem(list, 'Dolphin', 'dolphin.png');
  addGalleryItem(list, 'Dunkleosteus', 'dunkleosteus.png');
  addGalleryItem(list, 'Fish', 'fish.png');
  addGalleryItem(list, 'Healthbar', 'healthbar.png');
  addGalleryItem(list, 'Glyph', 'glyph.png');
  addGalleryItem(list, 'Jellyfish', 'jellyfish.png');
  addGalleryItem(list, 'Leech', 'leech.png');
  addGalleryItem(list, 'Leopard Shark', 'leopard-shark.png');
  addGalleryItem(list, 'Objects', 'objects-and-obstacles.png');
  addGalleryItem(list, 'Orctopus', 'octopus.png');
  addGalleryItem(list, 'Orca', 'orca.png');
  addGalleryItem(list, 'Orthocone', 'orthocone.png');
  addGalleryItem(list, 'Prehistoric Jellyfish', 'prehistoric-jellyfish.png');
  addGalleryItem(list, 'Pteranodon', 'pteranodon.png');
  addGalleryItem(list, 'Pufferfish', 'pufferfish.png');
  addGalleryItem(list, 'Seahorse', 'seahorse.png');
  addGalleryItem(list, 'Shark', 'shark.png');
  addGalleryItem(list, 'Shells', 'shells.png');
  addGalleryItem(list, 'Sonar', 'sonar.png');
  addGalleryItem(list, 'Sonar Responce', 'sonar-responce.png');
  addGalleryItem(list, 'Spikes', 'spikes.png');
  addGalleryItem(list, 'Splash', 'splash.png');
  addGalleryItem(list, 'Stars', 'stars.png');
  addGalleryItem(list, 'Stingray', 'stingray.png');
  addGalleryItem(list, 'Thunder', 'thunder.png');
  addGalleryItem(list, 'Trilobite', 'trilobite.png');
  addGalleryItem(list, 'Unused Turtle', 'unused-turtle.png');
  addGalleryItem(list, 'Vortex Drone', 'vortex-drone.png');
  addGalleryItem(list, 'Vortex Queen', 'vortex-queen.png');

  return list;
}

export default function EccoSprites() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco the Dolphin</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Sprites</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco the Dolphin : Sprites"
      subtitle="Sprites"
      icon={<DolphinIcon />}
      banner="ecco-the-dolphin/banner.jpg"
      caption="ecco-the-dolphin/title-screen.png"
      path={Path}
      thumbnailPath="ecco-the-dolphin/sprites/thumbnails/"
      filePath="ecco-the-dolphin/sprite-sheets/"
      list={list}           
    >
    <P>
      A collection of sprite sheets from the Mega Drive/Sega Genesis version of Ecco the Dolphin.
      These sprite sheets were extracted from software that I designed. To do this  required understanding the Mega Drive's hardware,
      and the formats used for storing the sprite data. The result are these beautiful high resolution sprite sheets that have never
      been seen before until now.
    </P>
    <P italic right>- Johnny L. de Alba</P>
    </Gallery>
  );
}


