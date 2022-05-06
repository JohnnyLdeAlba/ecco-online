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

  addGalleryItem(list, '0. Selection Screen', 'ecco2-00-selection-scr.gif');
  addGalleryItem(list, '1. Homebay', 'ecco2-01-home-bay.gif');
  addGalleryItem(list, '2. Crystal Springs', 'ecco2-02-crystal-springs.gif');
  addGalleryItem(list, '3. Fault Zont', 'ecco2-03-fault-zone.gif');
  addGalleryItem(list, '4. Two Tides', 'ecco2-04-two-tides.gif');
  addGalleryItem(list, '5. Trellia\'s Bay', 'ecco2-05-trellias-bay.gif');
  addGalleryItem(list, '6. Skyway', 'ecco2-06-skyway.gif');
  addGalleryItem(list, '7. Sky Tides', 'ecco2-07-sky-tides.gif');
  addGalleryItem(list, '8. Tube of Medusa', 'ecco2-08-tube-of-medusa.png');
  addGalleryItem(list, '9. Aqua Tubeway', 'ecco2-09-aqua-tubeway.gif');
  addGalleryItem(list, '10. Skylands', 'ecco2-10-skylands.gif');
  addGalleryItem(list, '11. Fin to Feather', 'ecco2-11-fin-to-feather.gif');
  addGalleryItem(list, '12. Eagle\'s Bay', 'ecco2-12-eagles-bay.gif');
  addGalleryItem(list, '13. Asterites\' Bay', 'ecco2-13-asterites-cave.gif');
  addGalleryItem(list, '14. The Lost Orcas', 'ecco2-14-the-lost-orcas.gif');
  addGalleryItem(list, '15. Maze of Stone', 'ecco2-15-maze-of-stone.gif');
  addGalleryItem(list, '16. Four Islands', 'ecco2-16-four-islands.gif');
  addGalleryItem(list, '17. Sea of Darkness', 'ecco2-17-sea-of-darkness.gif');
  addGalleryItem(list, '18. Vents of Medusa', 'ecco2-18-vents-of-medusa.gif');
  addGalleryItem(list, '19. Gateway', 'ecco2-19-gateway.gif');
  addGalleryItem(list, '20. Sea of Greeen', 'ecco2-20-sea-of-green.gif');
  addGalleryItem(list, '21. Moray Abyss', 'ecco2-21-moray-abyss.gif');
  addGalleryItem(list, '22. Asterites\' Home', 'ecco2-22-asterites-home.gif');
  addGalleryItem(list, '23. Sea of Birds', 'ecco2-23-sea-of-birds.gif');
  addGalleryItem(list, '24. The Eye', 'ecco2-24-the-eye.gif');
  addGalleryItem(list, '25. Big Water', 'ecco2-25-big-water.png');
  addGalleryItem(list, '26. Deep Ridge', 'ecco2-26-deep-ridge.gif');
  addGalleryItem(list, '27. The Hungry Ones', 'ecco2-27-the-hungry-ones.gif');
  addGalleryItem(list, '28. Secret Cave', 'ecco2-28-secret-cave.gif');
  addGalleryItem(list, '28. Lunar Bay', 'ecco2-29-lunar-bay.gif');
  addGalleryItem(list, '30. Vortex Future', 'ecco2-30-vortex-future.gif');
  addGalleryItem(list, '31. Black Clouds', 'ecco2-31-black-clouds.gif');
  addGalleryItem(list, '32. Gravitor Box', 'ecco2-32-gravitor-box.gif');
  addGalleryItem(list, '33. Globe Holder', 'ecco2-33-globe-holder.gif');
  addGalleryItem(list, '34. Convergence', 'ecco2-34-convergence.gif');
  addGalleryItem(list, '35. Dark Sea', 'ecco2-35-dark-sea.gif');
  addGalleryItem(list, '36. New Machine', 'ecco2-36-new-machine.gif');
  addGalleryItem(list, '37. Vortex Queen', 'ecco2-37-vortex-queen.gif');
  addGalleryItem(list, '38. Atlantis', 'ecco2-39-atlantis.gif');
  addGalleryItem(list, '39. Fish City', 'ecco2-40-fish-city.gif');
  addGalleryItem(list, '40. City of Forever', 'ecco2-41-city-of-forever.gif');
  addGalleryItem(list, '41. Inter', 'ecco2-42-inter.gif');
  addGalleryItem(list, '42. Innuendo', 'ecco2-43-innuendo.gif');
  addGalleryItem(list, '43. Trans', 'ecco2-44-trans.gif');
  addGalleryItem(list, '44. Inside', 'ecco2-45-inside.gif');
  addGalleryItem(list, '45. Vortex Arrived', 'ecco2-46-vortex-arrived.gif');
  addGalleryItem(list, '46. The Pod', 'ecco2-47-the-pod.gif');
  addGalleryItem(list, '47. Time Machine', 'ecco2-48-tmachine.gif');

  return list;
}

export default function Ecco2SonarMaps() {

  const list = getGalleryItems();

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Ecco 2: The Tides of Time</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Sonar Maps</PathItem>
  </>;

  return (
    <Gallery
      title="Ecco 2: The Tides of Time : Sonar Maps"
      subtitle="Sonar Maps"
      icon={<DolphinIcon />}
      banner="ecco-2-the-tides-of-time/sonar-maps/banner.gif"
      caption="ecco-2-the-tides-of-time/title-screen.png"
      path={Path}
      thumbnailPath="ecco-2-the-tides-of-time/sonar-maps/thumbnails/"
      filePath="ecco-2-the-tides-of-time/sonar-maps/"
      list={list}           
    >
     <P>
These are a collection of sonar maps from Ecco 2: The Tides of Time created by the community of Dark Sea. They were made by painstakingly piecing together 
multiple screeshots taken during game play.
    </P>

    <P>Special thanks to BlueGlass, Johnny L. de Alba, Jes and Tails151.</P>
    </Gallery>
  );
}


