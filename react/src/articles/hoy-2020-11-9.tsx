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
    <PathItem>Happy 1 Year Anniversary</PathItem>
  </>;

return (

<Document
  icon={<DolphinIcon />}
  title="Happy 1 Year Anniversary to Ecco the Dolphin Online!"
  media="2020/11/9/hoy/banner.jpg"
  category="News"
  headline="Happy 1 Year Anniversary to Ecco the Dolphin Online!"
  byline="November 9th, 2020 by Johnny L. de Alba"
  tldr="Ecco Online celebrates its one year anniversary."
  path={Path}
>

<H2>A New Age Has Begun!</H2>

<P>
One year ago I made the decision to start a new Ecco the Dolphin community. For the past 16 years the community at large was inactive with new developments popping up once every 4-5 years. I had contacted the leaders - the Old Guard - about a project I was going to begin working on. My plan was to reverse engineer the Mega Drive games and create a new Ecco the Dolphin fan game. I also had gathered rare material and wanted to build a repository.
</P>

<P>
Unfortunately the Old Guard wanted nothing to do with me. I burned too many bridges 16 years ago and alot of people refused to forgive me for events that transpired nearly a life time ago. The Old Guard had no interest in breathing new life into the community, they were happy with the status quo. After I had approached them I debated if I wanted to do this again.
</P>

<P>
16 years ago I was Arkonviox, owner of what was once a thriving Ecco the Dolphin community of artists and remixers. My old community was destroyed by my hands as I had failed them as a leader. I had personal demons to deal with which was why I stayed away from this community for so long as I did.
</P>

<P>
I’m back because I have unfinished business...I never completed my game engine, something I had spent half of my life working on. I never completed my Ecco the Dolphin website, something I put a lot of time into. I was also saddened the community had spent a long period in what one person has described as "The Dark Ages". It was time to bring the community back, and to take it to the next level!
</P>

<P>
For an entire year I pushed my sanity to the edge, working on a secret project. The goal was to reverse engineer the games and create a large dump of sprites and level maps. I succeeded. I reverse engineered the graphical assets from Ecco the Dolphin, Ecco 2 The Tides of Time, and the high definition sprites from Ecco the Dolphin PC. Today for the first time, I am not only releasing them all to the public, but the tool I used to dump them, Blue Dream!
</P>

<H3>Level Maps, Sprites, and Sprite Sheets</H3>

<P>
For those of you who follow me on social media, I spoke about Project Black Omen. The goal was to dump all the graphical assets from the two major Mega Drive games, and sprite assets from Ecco PC. Here they are available for download for the first time!!
</P>

<P>
<Image
url="2020/11/9/hoy/vortex-drone.png"
caption="A sprite sheet featuring all the animations of a Vortex Drone."
/>
</P>

<P>
<Image
url="2020/11/9/hoy/the-lost-orcas-preview.png"
caption="A level map from Ecco 2: The Tides of Time."
/>
</P>

<ul>
<li><A href={config.PUBLIC_ROOT + "ecco-the-dolphin/sprites"}>Ecco the Dolphin Sprite Sheets</A></li>
<li><A href={config.PUBLIC_ROOT + "ecco-the-dolphin/level-maps"}>Ecco the Dolphin Level Maps</A></li>
<li><A href={config.PUBLIC_ROOT + "ecco-2-the-tides-of-time/sprites"}>Ecco 2: The Tides of Time Level Maps</A></li>
<li><A href={config.PUBLIC_ROOT + "ecco-2-the-tides-of-time/level-maps"}>Ecco 2: The Tides of Time Level Maps</A></li>
<li><A href={config.PUBLIC_ROOT + "ecco-the-dolphin-pc/sprites"}>Ecco the Dolphin PC Sprite Sheets</A></li>
</ul>

<H3>Blue Dream Graphical Ecco Extraction Tool (Early Prototype)</H3>

<P>
Blue Dream is a game engine prototype, a graphical library, and extraction tools for the Ecco the Dolphin series. This version is for educational purposes only and lacks commentary and documentation on how to use it. I am releasing it as is and will be updating it and documenting it for those who are interested in using it. The tools work, if you need help understanding it feel free to drop by our discord for support. I will be happy to help you. It’s built in C using C++ only when necessary. The files included are for Visual C++.
</P>

<ul><li>
<A href={config.PUBLIC_ROOT + "2020/11/9/hoy/blue-dream-11012020.zip"}>Blue Dream Prototype 11-01-2020-01</A>
</li></ul>

<H3>Ecco 2 The Tides of Time Revision 1 for Master System (Unofficial Release)</H3>

<P>
Ecco 2 Revision 1 for Master System is a translation and hack of the Brazilian Ecco 2 Tides of Time. It features repairs to some of the games user interface elements and changes to the games story structure. The original version of this game was released on Game Gear and was rushed. This left the games story structure unfinished. Revision 1 fixes these issues. We are also releasing two additional versions of this game that only addresse the broken parts. These two versions are a fixed Portuguese version, and a "Game Gear Translation".
</P>

<P><Image url="2020/11/9/hoy/health-bar-comparison.png" /></P>

<H3>Ecco Defender of the Future Prototype 11-1999</H3>

<P>
Comby Laurent recently discovered a very early prototype of Ecco Defender of the Future. My fellow website administrator Moduvator was kind enough to analyze it. The result was a comprehensive article about the prototype documenting the differences and highlights. We are releasing it for the first time to the public!
</P>

<P><Image url="2020/11/9/hoy/defender-title.jpg" /></P>

<H3>Lost Content Resurfaces!</H3>

<P>
In 2008 there were two engineers who cracked the level formats for Ecco 1 and 2. They released editors capable of dumping level maps that had long been lost. Jorge and Tails151 were notable members of the community. Although Tails has not reemerged Jorge has! He was kind enough to share these lost tools with us! He is releasing his Ecco 2 sonar and level map extractor as open source!
</P>

<ul>
<li><A href={config.PUBLIC_ROOT + "2020/11/9/hoy/EccoED.7z"}>Tails151’s Ecco the Dolphin Level Editor Prototype</A></li>
<li><A href={config.PUBLIC_ROOT + "2020/11/9/hoy/E2ed_Src_Bin.7z"}>Jorge’s Ecco 2 Level Editor Prototype with Source Code</A></li>
</ul>

<H3>Level and Sonar Maps from the Alpha and X11 prototypes of Ecco 2!</H3>

<P>
Dakras, a member of our community was able to uses Jorge's Ecco 2 Editor to dump all the level maps from the prototypes of Ecco 2 known as the Alpha and X11 versions. They are available for download from the links below.
</P>

<P><Image url="2020/11/9/hoy/medusa-entrance-preview.png" /></P>

<ul>
<li><A href={config.PUBLIC_ROOT + "2020/11/9/hoy/ALPHA LEVEL IMAGES-20201102T014145Z-001.zip"}>ALPHA LEVEL IMAGES-20201102T014145Z-001.zip</A></li>
<li><A href={config.PUBLIC_ROOT + "2020/11/9/hoy/>ALPHA LEVEL IMAGES-20201102T014204Z-001.zip"}>ALPHA LEVEL IMAGES-20201102T014204Z-001.zip</A></li>
<li><A href={config.PUBLIC_ROOT + "2020/11/9/hoy/X11 LEVEL IMAGES-20201102T014227Z-001.zip"}>X11 LEVEL IMAGES-20201102T014227Z-001.zip</A></li>
</ul>

<H3>More to come…</H3>

<P>
You may have noticed the sites look has been updated. We aren’t finished yet! Over the next few months we will be expanding it with new content! So stay tuned!
</P>

</Document>

);}
