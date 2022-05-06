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

  addGalleryItem(list, '3D Dolphin', '3d-dolphin.png');
  addGalleryItem(list, '3D Eagle', '3d-eagle.png');
  addGalleryItem(list, '3D Jellyfish', '3d-jellyfish.png');
  addGalleryItem(list, '3D Mollusk', '3d-mollusk.png');
  addGalleryItem(list, '3D Plant', '3d-plant.png');
  addGalleryItem(list, '3D Sonar', '3d-sonar.png');
  addGalleryItem(list, 'Alphabet', 'alphabet.png');
  addGalleryItem(list, 'Amoeba', 'amoeba.png');
  addGalleryItem(list, 'Asterites\' Globes', 'asterites-globes.png');
  addGalleryItem(list, 'Healthbar', 'healthbar.png');
  addGalleryItem(list, 'Baby orca', 'baby-orca.png');
  addGalleryItem(list, 'Blue Shark', 'blue-shark.png');
  addGalleryItem(list, 'Bubbles', 'bubbles.png');
  addGalleryItem(list, 'Compass', 'compass.png');
  addGalleryItem(list, 'Cosmic Dust', 'cosmic-dust.png');
  addGalleryItem(list, 'Crabs', 'crabs.png');
  addGalleryItem(list, 'Dolphins', 'dolphin.png');
  addGalleryItem(list, 'Eagle', 'eagle.png');
  addGalleryItem(list, 'Fish', 'fish.png');
  addGalleryItem(list, 'Fission Particle', 'fission-particle.png');
  addGalleryItem(list, 'Future Plant', 'future-plant.png');
  addGalleryItem(list, 'Glyph', 'glyph.png');
  addGalleryItem(list, 'Jellyfish', 'jellyfish.png');
  addGalleryItem(list, 'Leech', 'leech.png');
  addGalleryItem(list, 'Lightning', 'lightning.png');
  addGalleryItem(list, 'Magic Arm', 'magic-arm.png');
  addGalleryItem(list, 'Medusa', 'medusa.png');
  addGalleryItem(list, 'Metasphere', 'metasphere.png');
  addGalleryItem(list, 'Mollusk', 'mollusk.png');
  addGalleryItem(list, 'Moon', 'moon.png');
  addGalleryItem(list, 'Moray Eels', 'moray-eels.png');
  addGalleryItem(list, 'Objects', 'objects.png');
  addGalleryItem(list, 'Octopus Arm', 'octopus-arm.png');
  addGalleryItem(list, 'Orca', 'orca.png');
  addGalleryItem(list, 'Pufferfish', 'pufferfish.png');
  addGalleryItem(list, 'Save Glyph', 'save-glyph.png');
  addGalleryItem(list, 'Seagull', 'seagull.png');
  addGalleryItem(list, 'Sea Turtle', 'sea-turtle.png');
  addGalleryItem(list, 'Sludge', 'sludge.png');
  addGalleryItem(list, 'Sonar', 'sonar.png');
  addGalleryItem(list, 'Sonar Responce', 'sonar-responce.png');
  addGalleryItem(list, 'Splash', 'splash.png');
  addGalleryItem(list, 'Starfish', 'starfish.png');
  addGalleryItem(list, 'Stars', 'stars.png');
  addGalleryItem(list, 'Stingray', 'stingray.png');
  addGalleryItem(list, 'Trellia', 'trellia.png');
  addGalleryItem(list, 'Vortex Drone', 'vortex-drone.png');
  addGalleryItem(list, 'Vortex Hybrid', 'vortex-hybrid.png');
  addGalleryItem(list, 'Vortex Jelly', 'vortex-jelly.png');
  addGalleryItem(list, 'Vortex Larvae', 'vortex-larvae.png');
  addGalleryItem(list, 'Vortex Queen', 'vortex-queen.png');
  addGalleryItem(list, 'Vortex Worms', 'vortex-worms.png');

  return list;
}

export default function Ecco2Sprites() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco 2: The Tides of Time</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Sprites</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco 2: The Tides of Time : Sprites"
      subtitle="Sprites"
      icon={<DolphinIcon />}
      banner="ecco-2-the-tides-of-time/banner.jpg"
      caption="ecco-2-the-tides-of-time/title-screen.png"
      path={Path}
      thumbnailPath="ecco-2-the-tides-of-time/sprites/thumbnails/"
      filePath="ecco-2-the-tides-of-time/sprite-sheets/"
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


