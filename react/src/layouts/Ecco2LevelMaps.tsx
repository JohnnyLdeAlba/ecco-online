import React from 'react';

import {styled} from "@mui/material/styles";
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';

import {DolphinIcon, PathItem} from '../com/Card';
import {t_gallery_item, addGalleryItem} from '../com/GalleryItem';
import {Context, H2, H3, Subheader, A, S, P, Media, Image, Collage} from '../lib/Toolbox';
import Gallery from '../com/Gallery';

import config from '../config';

function getGalleryItems() {

  const list:Array<t_gallery_item> = new Array();

  addGalleryItem(list, 'Aqua Tubeway', 'aqua-tubeway.png');
  addGalleryItem(list, 'Aqua Tubeway BG', 'aqua-tubeway-background.png');
  addGalleryItem(list, 'Asterite\'s Cave', 'asterites-cave.png');
  addGalleryItem(list, 'Asterite\'s Cave BG', 'asterites-cave-background.png');
  addGalleryItem(list, 'Atlantis', 'atlantis.png');
  addGalleryItem(list, 'Atlantis BG', 'atlantis-background.png');
  addGalleryItem(list, 'Big Water', 'big-water.png');
  addGalleryItem(list, 'Big Water BG', 'big-water-background.png');
  addGalleryItem(list, 'Black Clouds', 'black-clouds.png');
  addGalleryItem(list, 'Black Clouds BG', 'black-clouds-background.png');
  addGalleryItem(list, 'City of Forever', 'city-of-forever.png');
  addGalleryItem(list, 'City of Forever BG', 'city-of-forever-background.png');
  addGalleryItem(list, 'Convergence', 'convergence.png');
  addGalleryItem(list, 'Convergence BG', 'convergence-background.png');
  addGalleryItem(list, 'Crystal Springs', 'crystal-springs.png');
  addGalleryItem(list, 'Crystal Springs BG', 'crystal-springs-background.png');
  addGalleryItem(list, 'Dark Sea', 'dark-sea.png');
  addGalleryItem(list, 'Dark Sea BG', 'dark-sea-background.png');
  addGalleryItem(list, 'Deep Ridge', 'deep-ridge.png');
  addGalleryItem(list, 'Deep Ridge BG', 'deep-ridge-background.png');
  addGalleryItem(list, 'Eagle\'s Bay', 'eagles-bay.png');
  addGalleryItem(list, 'Eagle\'s Bay BG', 'eagles-bay-background.png');
  addGalleryItem(list, 'Fault Zone', 'fault-zone.png');
  addGalleryItem(list, 'Fault Zone BG', 'fault-zone-background.png');
  addGalleryItem(list, 'Fin to Feather', 'fin-to-feather.png');
  addGalleryItem(list, 'Fin to Feather BG', 'fin-to-feather-background.png');
  addGalleryItem(list, 'Fish City', 'fish-city.png');
  addGalleryItem(list, 'Fish City BG', 'fish-city-background.png');
  addGalleryItem(list, 'Four Islands', 'four-islands.png');
  addGalleryItem(list, 'Four Islands BG', 'four-islands-background.png');
  addGalleryItem(list, 'Gateway', 'gateway.png');
  addGalleryItem(list, 'Gateway BG', 'gateway-background.png');
  addGalleryItem(list, 'Globe Holder', 'globe-holder.png');
  addGalleryItem(list, 'Globe Holder BG', 'globe-holder-background.png');
  addGalleryItem(list, 'Gravitor Box', 'gravitor-box.png');
  addGalleryItem(list, 'Gravitor Box BG', 'gravitor-box-background.png');
  addGalleryItem(list, 'Homebay', 'home-bay.png');
  addGalleryItem(list, 'Homebay BG', 'home-bay-background.png');
  addGalleryItem(list, 'Innuendo', 'innuendo.png');
  addGalleryItem(list, 'Innuendo BG', 'innuendo-background.png');
  addGalleryItem(list, 'Inside', 'inside.png');
  addGalleryItem(list, 'Inside BG', 'inside-background.png');
  addGalleryItem(list, 'Inter', 'inter.png');
  addGalleryItem(list, 'Inter BG', 'inter-background.png');
  addGalleryItem(list, 'Lunar Bay', 'lunar-bay.png');
  addGalleryItem(list, 'Lunar Bay BG', 'lunar-bay-background.png');
  addGalleryItem(list, 'Maze of Stone', 'maze-of-stone.png');
  addGalleryItem(list, 'Maze of Stone BG', 'maze-of-stone-background.png');
  addGalleryItem(list, 'New Machine', 'new-machine.png');
  addGalleryItem(list, 'New Machine BG', 'new-machine-background.png');
  addGalleryItem(list, 'Prologue', 'prologue.png');
  addGalleryItem(list, 'Prologue BG', 'prologue-background.png');
  addGalleryItem(list, 'Sea of Birds', 'sea-of-birds.png');
  addGalleryItem(list, 'Sea of Birds BG', 'sea-of-birds-background.png');
  addGalleryItem(list, 'Sea of Darkness', 'sea-of-darkness.png');
  addGalleryItem(list, 'Sea of Darkness BG', 'sea-of-darkness-background.png');
  addGalleryItem(list, 'Sea of Green', 'sea-of-green.png');
  addGalleryItem(list, 'Sea of Green BG', 'sea-of-green-background.png');
  addGalleryItem(list, 'Secret Cave', 'secret-cave.png');
  addGalleryItem(list, 'Secret Cave BG', 'secret-cave-background.png');
  addGalleryItem(list, 'Selection Screen', 'selection-scr.png');
  addGalleryItem(list, 'Selection Screen BG', 'selection-scr-background.png');
  addGalleryItem(list, 'Skylands', 'skylands.png');
  addGalleryItem(list, 'Skylands BG', 'skylands-background.png');
  addGalleryItem(list, 'Sky Tides', 'sky-tides.png');
  addGalleryItem(list, 'Sky Tides BG', 'sky-tides-background.png');
  addGalleryItem(list, 'Skyway', 'skyway.png');
  addGalleryItem(list, 'Skyway BG', 'skyway-background.png');
  addGalleryItem(list, 'The Eye', 'the-eye.png');
  addGalleryItem(list, 'The Eye BG', 'the-eye-background.png');
  addGalleryItem(list, 'The Hungry Ones', 'the-hungry-ones.png');
  addGalleryItem(list, 'The Hungry Ones BG', 'the-hungry-ones-background.png');
  addGalleryItem(list, 'The Lost Orcas', 'the-lost-orcas.png');
  addGalleryItem(list, 'The Lost Orcas BG', 'the-lost-orcas-background.png');
  addGalleryItem(list, 'The Pod', 'the-pod.png');
  addGalleryItem(list, 'The Pod BG', 'the-pod-background.png');
  addGalleryItem(list, 'Time Machine', 'tmachine.png');
  addGalleryItem(list, 'Time Machine BG', 'tmachine-background.png');
  addGalleryItem(list, 'Trans', 'trans.png');
  addGalleryItem(list, 'Trans BG', 'trans-background.png');
  addGalleryItem(list, 'Trellia\'s Bay', 'trellias-bay.png');
  addGalleryItem(list, 'Trellia\'s Bay BG', 'trellias-bay-background.png');
  addGalleryItem(list, 'Tube of Medusa', 'tube-of-medusa.png');
  addGalleryItem(list, 'Tube of Medusa BG', 'tube-of-medusa-background.png');
  addGalleryItem(list, 'Two Tides', 'two-tides.png');
  addGalleryItem(list, 'Two Tides BG', 'two-tides-background.png');
  addGalleryItem(list, 'Vents of Medusa', 'vents-of-medusa.png');
  addGalleryItem(list, 'Vents of Medusa BG', 'vents-of-medusa-background.png');
  addGalleryItem(list, 'Vortex Arrived BG', 'vortex-arrived-background.png');
  addGalleryItem(list, 'Vortex Future', 'vortex-future.png');
  addGalleryItem(list, 'Vortex Future BG', 'vortex-future-background.png');
  addGalleryItem(list, 'Vortex Queen', 'vortex-queen.png');
  addGalleryItem(list, 'Vortex Queen BG', 'vortex-queen-background.png');

  return list;
}

export default function Ecco2LevelMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco 2: The Tides of Time</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Level Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco 2: The Tides of Time : Level Maps"
      subtitle="Level Maps"
      icon={<DolphinIcon />}
      banner="ecco-2-the-tides-of-time/level-maps/banner.png"
      caption="ecco-2-the-tides-of-time/title-screen.png"
      path={Path}
      thumbnailPath="ecco-2-the-tides-of-time/level-maps/thumbnails/"
      filePath="ecco-2-the-tides-of-time/level-maps/"
      list={list}           
    >
    <P>
      A collection of level maps from the Mega Drive/Sega Genesis version of Ecco 2: The Tides of Time.
      These level maps were extracted from software that I designed. To do this required understanding the Mega Drive's hardware,
      and the formats used for storing the level data. The result are these beautiful high resolution level maps that have never
      been seen before until now.
    </P>
    <P italic right>- Johnny L. de Alba</P>
    </Gallery>
  );
}


