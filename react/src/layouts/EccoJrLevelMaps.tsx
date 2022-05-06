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

  addGalleryItem(list, 'Aqua Maze', 'aqua-maze.png');
  addGalleryItem(list, 'Aqua Maze BG', 'aqua-maze-background.png');
  addGalleryItem(list, 'Bay of Songs', 'bay-of-songs.png');
  addGalleryItem(list, 'Bay of Songs BG', 'bay-of-songs-background.png');
  addGalleryItem(list, 'Dolphin Ride', 'dolphin-ride.png');
  addGalleryItem(list, 'Dolphin Ride', 'dolphin-ride-background.png');
  addGalleryItem(list, 'Fish Reef', 'fish-reef.png');
  addGalleryItem(list, 'Fish Reef BG', 'fish-reef-background.png');
  addGalleryItem(list, 'Home Sea', 'home-sea.png');
  addGalleryItem(list, 'Home Sea BG', 'home-sea-background.png');
  addGalleryItem(list, 'Meeting Maze', 'meeting-maze.png');
  addGalleryItem(list, 'Meeting Maze BG', 'meeting-maze-background.png');
  addGalleryItem(list, 'Melodic Waters', 'melodic-waters.png');
  addGalleryItem(list, 'Melodic Waters BG', 'melodic-waters-background.png');
  addGalleryItem(list, 'Mysterious Ridge', 'mysterious-ridge.png');
  addGalleryItem(list, 'Mysterious Ridge BG', 'mysterious-ridge-background.png');
  addGalleryItem(list, 'Ocean Tag', 'ocean-tag.png');
  addGalleryItem(list, 'Ocean Tag BG', 'ocean-tag-background.png');
  addGalleryItem(list, 'Sea Horse', 'sea-horse-reef.png');
  addGalleryItem(list, 'Sea Horse BG', 'sea-horse-reef-background.png');
  addGalleryItem(list, 'Seal Rocks', 'seal-rocks.png');
  addGalleryItem(list, 'Seal Rocks BG', 'seal-rocks-background.png');
  addGalleryItem(list, 'Shark Sea', 'shark-sea.png');
  addGalleryItem(list, 'Shark Sea BG', 'shark-sea-background.png');
  addGalleryItem(list, 'Shell Round Up', 'shell-round-up.png');
  addGalleryItem(list, 'Shell Round Up BG', 'shell-round-up-background.png');
  addGalleryItem(list, 'The Bay of Scattered Song', 'the-bay-of-scattered-song.png');
  addGalleryItem(list, 'The Bay of Scattered Song BG', 'the-bay-of-scattered-song-background.png');
  addGalleryItem(list, 'The Enchanted Sea', 'the-enchanted-sea.png');
  addGalleryItem(list, 'The Enchanted Sea BG', 'the-enchanted-sea-background.png');
  addGalleryItem(list, 'The Fish caves', 'the-fish-caves.png');
  addGalleryItem(list, 'The Fish Caves BG', 'the-fish-caves-background.png');
  addGalleryItem(list, 'Hermit Cave', 'the-house-of-the-hermit-crab.png');
  addGalleryItem(list, 'Hermit Cave BG', 'the-house-of-the-hermit-crab-background.png');
  addGalleryItem(list, 'The Lagoon of Songs', 'the-lagoon-of-songs.png');
  addGalleryItem(list, 'The Lagoon of Songs BG', 'the-lagoon-of-songs-background.png');
  addGalleryItem(list, 'The Lagoon of Stonefish', 'the-lagoon-of-stonefish.png');
  addGalleryItem(list, 'The Lagoon of Stonefish', 'the-lagoon-of-stonefish-background.png');
  addGalleryItem(list, 'The Magical Ocean', 'the-magical-ocean.png');
  addGalleryItem(list, 'The Magical Ocean BG', 'the-magical-ocean-background.png');
  addGalleryItem(list, 'The Ocean of Mimicry', 'the-ocean-of-mimicry.png');
  addGalleryItem(list, 'The Ocean of Mimicry BG', 'the-ocean-of-mimicry-background.png');
  addGalleryItem(list, 'The Sea of Music', 'the-sea-of-music.png');
  addGalleryItem(list, 'The Sea of Music BG', 'the-sea-of-music-background.png');
  addGalleryItem(list, 'Treasure Caves', 'treasure-caves.png');
  addGalleryItem(list, 'Treasure Caves BG', 'treasure-caves-background.png');
  addGalleryItem(list, 'Turtle Islands', 'turtle-islands.png');
  addGalleryItem(list, 'Turtle Islands BG', 'turtle-islands-background.png');
  addGalleryItem(list, 'Vents of Pearl', 'vents-of-pearl.png');
  addGalleryItem(list, 'Vents of Pearl BG', 'vents-of-pearl-background.png');
  addGalleryItem(list, 'Volcano Bay', 'volcano-bay.png');
  addGalleryItem(list, 'Volcano Bay BG', 'volcano-bay-background.png');

  return list;
}

export default function EccoJrLevelMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco Jr.</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Level Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco Jr : Level Maps"
      subtitle="Level Maps"
      icon={<DolphinIcon />}
      banner="ecco-jr/level-maps/banner.png"
      caption="ecco-jr/title-screen.png"
      path={Path}
      thumbnailPath="ecco-jr/level-maps/thumbnails/"
      filePath="ecco-jr/level-maps/"
      list={list}           
    >
    <P>
      A collection of level maps from the Mega Drive/Sega Genesis version of Ecco Jr.
      These level maps were extracted from software that I designed. To do this  required understanding the Mega Drive's hardware,
      and the formats used for storing the level data. The result are these beautiful high resolution level maps that have never
      been seen before until now.
    </P>
    <P italic right>- Johnny L. de Alba</P>
    </Gallery>
  );
}


