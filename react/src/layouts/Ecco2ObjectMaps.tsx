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
  addGalleryItem(list, 'Asterite\'s Cave', 'asterites-cave.png');
  addGalleryItem(list, 'Atlantis', 'atlantis.png');
  addGalleryItem(list, 'Big Water', 'big-water.png');
  addGalleryItem(list, 'Black Clouds', 'black-clouds.png');
  addGalleryItem(list, 'City of Forever', 'city-of-forever.png');
  addGalleryItem(list, 'Convergence', 'convergence.png');
  addGalleryItem(list, 'Crystal Springs', 'crystal-springs.png');
  addGalleryItem(list, 'Dark Sea', 'dark-sea.png');
  addGalleryItem(list, 'Deep Ridge', 'deep-ridge.png');
  addGalleryItem(list, 'Eagle\'s Bay', 'eagles-bay.png');
  addGalleryItem(list, 'Fault Zone', 'fault-zone.png');
  addGalleryItem(list, 'Fin to Feather', 'fin-to-feather.png');
  addGalleryItem(list, 'Fish City', 'fish-city.png');
  addGalleryItem(list, 'Four Islands', 'four-islands.png');
  addGalleryItem(list, 'Gateway', 'gateway.png');
  addGalleryItem(list, 'Globe Holder', 'globe-holder.png');
  addGalleryItem(list, 'Gravitor Box', 'gravitor-box.png');
  addGalleryItem(list, 'Homebay', 'home-bay.png');
  addGalleryItem(list, 'Innuendo', 'innuendo.png');
  addGalleryItem(list, 'Inside', 'inside.png');
  addGalleryItem(list, 'Inter', 'inter.png');
  addGalleryItem(list, 'Lunar Bay', 'lunar-bay.png');
  addGalleryItem(list, 'Maze of Stone', 'maze-of-stone.png');
  addGalleryItem(list, 'New Machine', 'new-machine.png');
  addGalleryItem(list, 'Sea of Birds', 'sea-of-birds.png');
  addGalleryItem(list, 'Sea of Darkness', 'sea-of-darkness.png');
  addGalleryItem(list, 'Sea of Green', 'sea-of-green.png');
  addGalleryItem(list, 'Secret Cave', 'secret-cave.png');
  addGalleryItem(list, 'Selection Screen', 'selection-scr.png');
  addGalleryItem(list, 'Skylands', 'skylands.png');
  addGalleryItem(list, 'Sky Tides', 'sky-tides.png');
  addGalleryItem(list, 'Skyway', 'skyway.png');
  addGalleryItem(list, 'The Eye', 'the-eye.png');
  addGalleryItem(list, 'The Hungry Ones', 'the-hungry-ones.png');
  addGalleryItem(list, 'The Lost Orcas', 'the-lost-orcas.png');
  addGalleryItem(list, 'Trans', 'trans.png');
  addGalleryItem(list, 'Trellia\'s Bay', 'trellias-bay.png');
  addGalleryItem(list, 'Tube of Medusa', 'tube-of-medusa.png');
  addGalleryItem(list, 'Two Tides', 'two-tides.png');
  addGalleryItem(list, 'Vents of Medusa', 'vents-of-medusa.png');
  addGalleryItem(list, 'Vortex Future', 'vortex-future.png');
  addGalleryItem(list, 'Vortex Queen', 'vortex-queen.png');

  return list;
}

export default function Ecco2ObjectMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco 2: The Tides of Time</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Object Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco 2: The Tides of Time : Object Maps"
      subtitle="Object Maps"
      icon={<DolphinIcon />}
      banner="ecco-2-the-tides-of-time/object-maps/banner.png"
      caption="ecco-2-the-tides-of-time/title-screen.png"
      path={Path}
      thumbnailPath="ecco-2-the-tides-of-time/object-maps/thumbnails/"
      filePath="ecco-2-the-tides-of-time/object-maps/"
      list={list}           
    >
<P>
A collection of object maps for the Sega Genesis/Mega Drive engineered by notable speedrunner <A href="https://twitter.com/TheRealUpthorn">Upthorn</A>. An object map is similiar to a level map except it contains all the obstacles, objects and creatures. These maps were generated through a combination of traditional techniques and reverse engineering research that was used to develope a specialized script.
</P>
    </Gallery>
  );
}


