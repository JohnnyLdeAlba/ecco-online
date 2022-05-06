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

  addGalleryItem(list, 'Attract Mode', 'attract-mode.png');
  addGalleryItem(list, 'Attract Mode BG', 'attract-mode-background.png');
  addGalleryItem(list, 'Celebration', 'celebration.png');
  addGalleryItem(list, 'Celebration BG', 'celebration-background.png');
  addGalleryItem(list, 'City of Forever', 'city-of-forever.png');
  addGalleryItem(list, 'City of Forever BG', 'city-of-forever-background.png');
  addGalleryItem(list, 'Cold Water', 'cold-water.png');
  addGalleryItem(list, 'Cold Water BG', 'cold-water-background.png');
  addGalleryItem(list, 'Dark Water', 'dark-water.png');
  addGalleryItem(list, 'Dark Water BG', 'dark-water-background.png');
  addGalleryItem(list, 'Deep City', 'deep-city.png');
  addGalleryItem(list, 'Deep City BG', 'deep-city-background.png');
  addGalleryItem(list, 'Deep Water', 'deep-water.png');
  addGalleryItem(list, 'Deep Water BG', 'deep-water-background.png');
  addGalleryItem(list, 'Hard Water', 'hard-water.png');
  addGalleryItem(list, 'Hard Water BG', 'hard-water-background.png');
  addGalleryItem(list, 'Homebay', 'home-bay.png');
  addGalleryItem(list, 'Homebay BG', 'home-bay-background.png');
  addGalleryItem(list, 'Ice Zone', 'ice-zone.png');
  addGalleryItem(list, 'Ice Zone BG', 'ice-zone-background.png');
  addGalleryItem(list, 'Island Zone', 'island-zone.png');
  addGalleryItem(list, 'Island Zone BG', 'island-zone-background.png');
  addGalleryItem(list, 'Jurassic Beach', 'jurassic-beach.png');
  addGalleryItem(list, 'Jurassic Beach BG', 'jurassic-beach-background.png');
  addGalleryItem(list, 'Medusa Bay', 'medusa-bay.png');
  addGalleryItem(list, 'Medusa Bay BG', 'medusa-bay-background.png');
  addGalleryItem(list, 'Open Ocen', 'open-ocean.png');
  addGalleryItem(list, 'Open Ocean BG', 'open-ocean-background.png');
  addGalleryItem(list, 'Origin Beach', 'origin-beach.png');
  addGalleryItem(list, 'Origin Beach BG', 'origin-beach-background.png');
  addGalleryItem(list, 'Pteranodon Pond', 'pteranodon-pond.png');
  addGalleryItem(list, 'Pteranodon Pond BG', 'pteranodon-pond-background.png');
  addGalleryItem(list, 'Return to Earth', 'return-to-earth.png');
  addGalleryItem(list, 'Return to Earth BG', 'return-to-earth-background.png');
  addGalleryItem(list, 'Ridge Water', 'ridge-water.png');
  addGalleryItem(list, 'Ridge Water BG', 'ridge-water-background.png');
  addGalleryItem(list, 'Selection Screen', 'selection-scr.png');
  addGalleryItem(list, 'Selection Screen BG', 'selection-scr-background.png');
  addGalleryItem(list, 'The Lagoon', 'the-lagoon.png');
  addGalleryItem(list, 'The Lagoon BG', 'the-lagoon-background.png');
  addGalleryItem(list, 'The Last Fight', 'the-last-fight.png');
  addGalleryItem(list, 'The Last Fight BG', 'the-last-fight-background.png');
  addGalleryItem(list, 'The Library', 'the-library.png');
  addGalleryItem(list, 'The Library BG', 'the-library-background.png');
  addGalleryItem(list, 'The Machine', 'the-machine.png');
  addGalleryItem(list, 'The Machine BG', 'the-machine-background.png');
  addGalleryItem(list, 'The Marble Sea', 'the-marble-sea.png');
  addGalleryItem(list, 'The Marble Sea BG', 'the-marble-sea-background.png');
  addGalleryItem(list, 'The Tube', 'the-tube.png');
  addGalleryItem(list, 'The Tube BG', 'the-tube-background.png');
  addGalleryItem(list, 'The Vents', 'the-vents.png');
  addGalleryItem(list, 'The Vents BG', 'the-vents-background.png');
  addGalleryItem(list, 'Trilobite Circle', 'trilobite-circle.png');
  addGalleryItem(list, 'Trilobite Circle BG', 'trilobite-circle-background.png');
  addGalleryItem(list, 'Undercaves', 'undercaves.png');
  addGalleryItem(list, 'Undercaves BG', 'undercaves-background.png');

  return list;
}

export default function EccoLevelMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco the Dolphin</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Level Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco the Dolphin : Level Maps"
      subtitle="Level Maps"
      icon={<DolphinIcon />}
      banner="ecco-the-dolphin/level-maps/banner.png"
      caption="ecco-the-dolphin/title-screen.png"
      path={Path}
      thumbnailPath="ecco-the-dolphin/level-maps/thumbnails/"
      filePath="ecco-the-dolphin/level-maps/"
      list={list}           
    >
    <P>
      A collection of level maps from the Mega Drive/Sega Genesis version of Ecco the Dolphin.
      These level maps were extracted from software that I designed. To do this  required understanding the Mega Drive's hardware,
      and the formats used for storing the level data. The result are these beautiful high resolution level maps that have never
      been seen before until now.
    </P>
    <P italic right>- Johnny L. de Alba</P>
    </Gallery>
  );
}


