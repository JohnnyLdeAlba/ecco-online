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

  addGalleryItem(list, '0. Selection Screen', 'ecco-00-selection-scr.png');
  addGalleryItem(list, '1. Homebay', 'ecco-01-homebay.png');
  addGalleryItem(list, '2. Medusa Bay', 'ecco-02-medusa-bay.png');
  addGalleryItem(list, '3. Undercaves', 'ecco-03-undercaves.png');
  addGalleryItem(list, '4. The Vents', 'ecco-04-the-vents.png');
  addGalleryItem(list, '5. The Lagoon', 'ecco-05-the-lagoon.png');
  addGalleryItem(list, '6. Ridge Water', 'ecco-06-ridge-water.png');
  addGalleryItem(list, '7. Open Ocean', 'ecco-07-open-ocean.png');
  addGalleryItem(list, '8. Ice Zone', 'ecco-08-ice-zone.png');
  addGalleryItem(list, '9. Hard Water', 'ecco-09-hard-water.png');
  addGalleryItem(list, '10. Cold Water', 'ecco-10-cold-water.png');
  addGalleryItem(list, '11. Island Zone', 'ecco-11-island-zone.png');
  addGalleryItem(list, '12. Deep Water', 'ecco-12-deep-water.png');
  addGalleryItem(list, '13. Volcanic Reef', 'ecco-13-volcanic-reef.png');
  addGalleryItem(list, '14. Ship Grave Sea', 'ecco-14-ship-grave-sea.png');
  addGalleryItem(list, '15. Wreck Trap', 'ecco-15-wreck-trap.png');
  addGalleryItem(list, '16. The Sea of Silence', 'ecco-16-the-sea-of-silence.png');
  addGalleryItem(list, '17. Deep Gate', 'ecco-17-deep-gate.png');
  addGalleryItem(list, '18. The Marble Sea', 'ecco-18-the-marble-sea.png');
  addGalleryItem(list, '19. The Library', 'ecco-19-the-library.png');
  addGalleryItem(list, '20. Deep City', 'ecco-20-deep-city.png');
  addGalleryItem(list, '21. City of Forever', 'ecco-21-city-of-forever.png');
  addGalleryItem(list, '22. Jurassic Beach', 'ecco-22-jurassic-beach.png');
  addGalleryItem(list, '23. Pteranadon Pond', 'ecco-23-pteranadon-pond.png');
  addGalleryItem(list, '24. Origin Beach', 'ecco-24-origin-beach.png');
  addGalleryItem(list, '25. Trilobite Circle', 'ecco-25-trilobite-circle.png');
  addGalleryItem(list, '26. Dark Water', 'ecco-26-dark-water.png');
  addGalleryItem(list, '27. The Tube', 'ecco-27-the-tube.png');
  addGalleryItem(list, '28. Welcome to the Machine', 'ecco-28-welcome-to-the-machine.png');
  addGalleryItem(list, '28. Welcome to the Machine JP', 'ecco-28-welcome-to-the-machine-japanese.png');
  addGalleryItem(list, '29. The Last Fight', 'ecco-29-the-last-fight.png');

  return list;
}

export default function EccoSonarMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco the Dolphin</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Sonar Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco the Dolphin : Sonar Maps"
      subtitle="Sonar Maps"
      icon={<DolphinIcon />}
      banner="ecco-the-dolphin/sonar-maps/banner.png"
      caption="ecco-the-dolphin/title-screen.png"
      path={Path}
      thumbnailPath="ecco-the-dolphin/sonar-maps/thumbnails/"
      filePath="ecco-the-dolphin/sonar-maps/"
      list={list}           
    >
    <P>
These are a collection of sonar maps from Ecco the Dolphin created by Tails151. They were made by painstakingly piecing together 
multiple screeshots taken during game play. 
    </P>
    </Gallery>
  );
}


