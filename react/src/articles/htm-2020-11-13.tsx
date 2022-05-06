import React from 'react';

import {styled} from "@mui/material/styles";

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, H3, Subheader, A, S, P, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function DQP_2022_01_10() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>News</PathItem>
    <PathItem>/</PathItem>
    <PathItem>How to Modify a Dreamcast Image</PathItem>
  </>;

  return (
    <Document
      icon={<DolphinIcon />}
      title="How to Modify a Dreamcast Image"
      media="2020/11/13/htm/banner.jpg"
      category="Hacking"
      headline="How To Modify The Files In A Dreamcast ROM Image"
      byline="November 13th, 2020 by Moduvator"
      tldr="In this tutorial Moduvator explains how to modify a Dreamcast disc image."
      path={Path}
    >

      <P center><img src={config.PUBLIC_ROOT + "2020/11/13/htm/gd-rom-music.png"} /></P>

      <P>
        My return had a grander purpose besides starting a new community: I wanted to reverse engineer the games and build a new game engine.
      </P>

      <H2>Step 1. Extracting the Data from the Image</H2>

      <P>
        Extracting the files is easily done with GD-ROM Explorer. In this example I am going to use the DoTF Beta from November 1999 to modify the Levels.txt to include a map into the game which isn’t accessible otherwise. We start with a directory containing the initial GDI file and several other files, one per each track of the disc.
      </P>

      <P>
        <ol>
          <li>
            In GD-ROM Explorer click Open and navigate to the GDI file of the image. If all goes well, we should be then presented with the complete layout of the disc.
            <P><Image url="2020/11/13/htm/gd-rom-explorer.png" /></P>
          </li>
          <li>
            Now select the ECCO1 in the Track 03, right-click on it and extract the whole directory to a location of your choosing.
            <P center><img src="2020/11/13/htm/gd-rom-extrat.png" alt="" /></P>
          </li>
          <li>Do the same to the IP.BIN just above. This file is actually the bootloader for the entire disc and we are going to need this later on to build the image back.</li>
          <li>Finally, rename the Ecco.GDI to disc.gdi to help automate the ROM rebuild process later.</li>
        </ol>
      </P>

      <H2>Step 2. Modifying the Files Needed</H2>

      <P center><img src="2020/11/13/htm/gd-rom-modify.png" alt="" /></P>

      <P>We are now satisfied the files have been extracted, now it is time to make the changes needed to make things work.</P>

      <P>
        In this version of DoTF the order the levels are to be loaded is set inside Levels.txt. While there already is a file 190_LOBNOE.GDE on the disc it isn’t on the list just yet so this is what needs to be changed. Simply open the file in the text editor of your choice and add the missing map using the neighbouring lines as an example.
      </P>

      <P center><img src="2020/11/13/htm/gd-rom-insert.png" alt="" /></P>

      <H2>Step 3. Reassembling the ROM Image with Modified Files</H2>

      <P>For this we are going to need a piece of software called GDI Builder which is designed to automate the task of building a bootable Dreamcast disc image.</P>

      <P center><Image url="2020/11/13/htm/build-gd-rom.png" /></P>

      <ol>
        <li>
          In the program click on Browse at the Data files input box and navigate to the directory to which the contents of Track 3 has previously been extracted.
        </li>
        <li>
          Do the same for the IP.BIN, pointing the program to the file extracted earlier.
        </li>
        <li>
          For the CDDA section, navigate to where the original image is located and choose Track04.raw. This file is needed for the image to be built properly, please see Appendix A for technical details on reasons for that.
        </li>
        <li>
          For the Output dir navigate to and select the directory containing the disc.gdi and all the track files mentioned in Step 1.
        </li>
        <li>
          Finally click the Create GD-ROM button. Confirm the original files to be overwritten. Once done, the program will display a dialog box with text data to be put into the .GDI file. This is the reason we have renamed it to disc.gdi earlier and this way the file is updated automatically so you can safely close the window.
        </li>
        <li>
          And now it is time to launch your Dreamcast emulator of choice and load the modified ROM you’ve just built. If everything goes well, you will see a new record in the levels list which can now be loaded, just like any else!
        </li>
      </ol>

      <P center><Image url="2020/11/13/htm/ecco-level-select.jpg" /></P>

      <H2>Links</H2>

      <P>
        Both pieces of software used in this tutorial are available
        here: <A href="https://projects.sappharad.com/tools/gdibuilder.html">
          https://projects.sappharad.com/tools/gdibuilder.html
        </A>
      </P> 

      <ul>
        <li>
          GD-ROM Explorer: <A href="https://projects.sappharad.com/tools/jc_gdrom-explorer-v1.6.3.2-unofficial.zip">
            https://projects.sappharad.com/tools/jc_gdrom-explorer-v1.6.3.2-unofficial.zip
          </A>
        </li>
        <li>
          GDI Builder: <A href="https://projects.sappharad.com/tools/gdibuilder13_win32.zip">
            https://projects.sappharad.com/tools/gdibuilder13_win32.zip
          </A>
        </li>
        <li>       
         <A href="Ecco Defender of the Future Prototype 11-1999">
           Ecco Defender of the Future Prototype 11-1999
         </A> 
        </li>
      </ul>

      <H2>Appendix A. Reasons for Track 4.raw</H2>

      <P>
        So why there are two data tracks with a CD Audio one in the middle? The Dreamcast GD-ROM can be laid out in two different ways. Both of them start with a pair of single density (SD) tracks at the centre of the disc, the first one being a data track (which sometimes may contain the bonus content for the game) and the second one being an audio track with a warning not to play the disc on a regular audio player. After this begins the high density (HD) area which is about 1 GB in size and contains the actual game files, and this is where things may be different. Depending on the layout this can be a single big track from beginning to the end like shown here:
      </P>

      <P center><img src={config.PUBLIC_ROOT + "2020/11/13/htm/gd-rom-tracks.png"} /></P> 

      <P>
        Most of the Dreamcast games use this kind of layout. However there is a second option which allows games to make use of CD Audio tracks put into the high density area. In this case Track 3 is merely a small Table of Contents (TOC), telling machine the names of the files and where on the disc they are located. After that there can then be up to 95 CD-Audio tracks to be used within the game, and finally there is another data track which contains the actual files themselves.
      </P>

      <P center><img src={config.PUBLIC_ROOT + "2020/11/13/htm/gd-rom-tracks-extended.png"} /></P>

      <P>
        With this beta of DoTF the developers have apparently been experimenting with the idea of putting in-game music onto the GD-ROM as audio tracks, thus using the second option described. Even though there is no actual audio on this disc yet, the program is already built with this structure in mind and had we not told GDI Builder about there being a dummy Track 4, all the data would have ended up in Track 3, making the whole ROM un-bootable.
      </P>

    </Document>
  );
}
