import React from 'react';

import {styled} from "@mui/material/styles";

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, H3, Subheader, A, S, P, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function DQP_2022_01_10() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Prototypes</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Ecco Defender of the Future Prototype</PathItem>
  </>;

return (

<Document
  icon={<DolphinIcon />}
  title="Ecco Defender of the Future Prototype"
  media="2020/11/10/edp/banner.png"
  category="Prototypes"
  headline="Prototype 11-1999 for Dreamcast"
  byline="November 10th, 2020 by Moduvator"
  tldr="Moduvator examines an Ecco Dreamcast prototype."
  path={Path}
>

<P><Image url="2020/11/10/edp/appaloosa-interactive.jpg" /></P>

<P>Prototype 11-1999 is one of the earliest known prototypes of the Dreamcast version of Ecco Defender of the Future.</P>

<P>
This particular build of Defender of The Future appears to be dated around November 1999, judging by the timestamps of the files on the disk. Considering that the earliest known working was put together around May same year and that only had one working level, the guys at Appaloosa were definitely working hard!
</P>

<H2>Main Menu</H2>

<P>
The title menu background is once again different from what we see in the versions that follow this one. It would seem that this has gone through multiple iterations as the development went along before settling on what was put into the final release.
</P>

<P>
The overall style of the title itself is also completely different from one in the final game. Whilst clearly displaying much more individuality it might have been considered being too extravagant at some point, resulting with the version what we all are used to.
</P>

<P>
There is no music in this build with the files for it completely missing. My guess is that either the music has not been done by this stage or the plans may have been to make it play as CD audio because in the Options there is a Sound menu which includes a Sound Test feature, referring to the music as CD Tracks:
</P>

<P><Image url="2020/11/10/edp/title-screen-menu.png" /></P>

<P>The title screen and menu are different when compared to the final version of the game.</P>

<P>
Pressing X while in the main Options menu displays a message "Cheats Enabled" in the bottom right corner. Whilst not giving Ecco invincibility or endless air it does unlock all the Songs and Powers. On some of the levels it automatically triggers key points that would normally require solving the level’s main puzzle first, like opening the temple door at Shrine of Controversy.
</P>

<Image
  url="2020/11/10/edp/sound-test.jpg"
  caption="The music in this build is missing completely."
/>
<Image
  url="2020/11/10/edp/all-colored-glyphs.png"
  caption="Left: Power of Invisibility. Top Right: Power of Vitiality. Bottom Right: Power of Air."
/>

<H2>User Interface and Power-Ups</H2>

<P>
The air and life indicators look much more like their counterparts from the MegaDrive version of Ecco. They are already changed in the next beta from January to what we normally see in DoTF, so this is one the most distinguishing feature of this build. Moreover, the effects of Power of Air and Power of Vitality simply add a duplicate set of sprites to the right of their corresponding bars.
</P>

<P>
Power Glyphs again look much more like ones from the MegaDrive series and are colour-coded for your convenience which to me is actually a neat idea as it’s often difficult to discern between them in the final version. The coding is as follows:
</P>

<P>
<ul>
  <li><S bold color="#ff0000">Red</S> - Power of Vitality</li>
  <li><S bold color="#ffff00">Yellow</S> - Power of Air</li>
  <li><S bold color="#00ff00">Green</S> - Power of Invisibility</li>
  <li><S bold color="#1166aa">Blue</S> - Power of Vigor</li>
  <li><S bold color="#4444aa">Purple</S> - Power of Sonar</li>
</ul>
</P>

<Image
  url="2020/11/10/edp/health-bar-comparison.png"
  caption="The air and life bars look similiar to their counterparts on the Mega Drive. The icons for the active power-ups are also different from the ones used in the final game:"
/>
<Image
  url="2020/11/10/edp/power-of-vitality-enhanced-life-bar.png"
  caption="Power of Vigour is currently active. Note the empty space to the left to make room for extra health/air bars."
/>
<Image
  url="2020/11/10/edp/power-of-vitality-enhanced-life-bar.png"
  caption="Power of Sonar with Vitality also picked up."
/>

<P>
Picking up the Power Glyphs does not trigger their corresponding messages to appear on the screen, even though the messages themselves are already present in the level files. The names at this stage are clearly placeholders to be filled later: for example, Power of Vigor is called "Super Strength", Power of Vitality being "Extra Health" and so on.
</P>

<P>
The Powers work slightly differently to how they are done in the release version of the game. Power of Sonar makes Ecco’s sonar red while not adding any sound effects, Power of Vigor makes Ecco simply ignore any currents, so that the player can easily swim through them with the A button alone.
</P>

<P>
There is an Inventory menu which is accessible from the pause menu. It shows what Powers and Songs Ecco has learned so far. My assumption is that this was useful for debug purposes when one would have to quickly switch between levels, but not so much for the actual gameplay so it got removed in the end.
</P>

<Image
  url="2020/11/10/edp/special-menu.jpg"
  caption="Also shown here is the number in the top right corner, displaying Ecco’s absolute speed in arbitrary units. Swimming normally is usually 70-73 units while a charge attack makes it go up to 103-109. The continue menu doesn’t have its own dedicated screen, instead it is displayed right in the game, and it also doesn’t appear to take no for the answer! Indeed, Ecco, it is your destiny…"
/>
<Image
  url="2020/11/10/edp/foe-queen-lasers.jpg"
  caption="The Foe Queen looks different in the prototype and shoots lasers!"
/>

<P>
Curiously enough on the secret “Pseudo-2D” levels the game resumes at the point where Ecco has died instead of restarting the whole map. It does make me wonder whether it was an inside company joke addressing the notorious difficulty of the MegaDrive series!
</P>

<P>
There are no cinematics in this build yet. There is one level file which is used for Descent of The Foe, but at this stage it’s just an empty map, very clearly based upon the one used for Atlantis, with nothing there except for a few dolphins, swimming in a fixed pattern.
</P>

<H2>Gameplay</H2>

<P>
It is immediately obvious that pretty much all the levels that are in the final game are present in this beta. They look more empty, of course, and some things are different, but the overall map geometry appears to have already been finalized. The only exception being the Hanging Waters, which is more of a proof-of-concept at this point, rather than a playable stage.
</P>

<Image url="2020/11/10/edp/hanging-waters.jpg" />

<P>
The auto-aiming when charging using the B button is much more aggressive than in the final release both in terms of distance to the target and the overall degree with which it steers Ecco towards his target: he will easily go straight for a fish which isn’t even on the screen yet! It is obvious how this could be a nuisance to the playtesters and why it was toned down in the final release.
</P>

<P>
There seems to be a very annoying bug in the controls where if one were to use the triggers on the gamepad to rotate the camera it would then cause Ecco to automatically return to horizontal the moment the analogue stick is released instead of keeping the direction he was pointed at. This makes the whole game virtually unplayable and requires a full game restart to put back right.
</P>

<P>
It’s also worth mentioning that the camera doesn’t yet switch during most of the scripted sequences, such as freeing the baby whale in the first stage or the crane operating in Master of Forgotten Skills, instead remaining focused on Ecco. Sometimes the game would also take away the controls for that time while Ecco is hanging there, still spending that precious air! Overall, the camera is very problematic in this build, starting from showing us very odd angles during the dialogues and ending with it facing in the entirely wrong direction. Like here with the big fish in Anguish of Dearth where the camera’s looking inside the fish instead of out of its mouth!
</P>

<Image
  url="2020/11/10/edp/inside-fish.jpg"
  caption="There are no message glyphs on any of the levels in this build of the game, but there are much more dolphins which seem to serve their function at this time, delivering hints on the gameplay and the occasional hilarious placeholder messages."
/>
<Image
  url="2020/11/10/edp/sup-dude.jpg"
  caption="The messages themselves are displayed on the bottom portion of the screen and do not have anything to highlight them. Sometimes this makes the text very difficult to read as it blends with whatever’s displayed in the background. This must have been obvious to the game developers as well as this is fixed in the next beta already."
/>
<Image
  url="2020/11/10/edp/crimson.jpg"
  caption="The Common Dolphins are missing in this build. Models for the other episodes of the game appear to have been done in full, including Circle, Mover and Crimson as well as the Outcasts and The Clan."
/>
<Image
  url="2020/11/10/edp/dolphin-clones.jpg"
  caption={"Most of the \"normal\" dolphins use Ecco’s model, sometimes with a different texture and sometimes being outright doppelgangers complete with stars on their brow. Although, upon closer examinations it’s very easy to spot an impostor!"}
/>

<P>
Sonar maps for the levels are actually much more meaningful than in the final game, showing the entire level to the player. This may have been determined as making the game too easy and reduced to display only a small portion of the map at the time.
</P>

<Image
  url="2020/11/10/edp/sonar-map.jpg"
  caption="Perils of The Coral Reef. Can you spot the Great White?"
/>
<Image
  url="2020/11/10/edp/sonarmap-alternate.jpg"
  caption="Anguish of Dearth. This is simply beautiful."
/>

<P>
The sound effects for the game are not finished yet with many of them missing or being completely different in the final version. One can easily see that for themselves by downloading the archive with the sounds I have extracted from the sound banks (see below in links). Some levels, such as Hanging Waters don’t have any sound at all which makes me believe that this is controlled individually by every map.
</P>

<P>
And this about does it for the overall review of the features present in this build of DoTF! There is much more to the game than that, of course and in the next part I shall review the individual levels in more detail, as well as noting some deviations from the final story. For example, did you know that in this version the dolphin that asks you to bring him a blue fish in exchange for the Song of Manta confesses that he ate them all too quickly and that’s why there’s none left in his lagoon?
</P>

<H2>Links</H2>

<ul>
  <li><A href="https://vk.com/@moduvator-ecco-dotf-beta-111999">Russian Translation of this Article</A></li>
  <li><A href={config.PUBLIC_ROOT + "2020/11/10/edp/dc_dotf-beta-11-1999_sounds.zip"}>Sounds Extracted from .KAT Sound Banks (2.5 MB)</A></li>
  <li><A href="https://www.mod-atlantis.net/downloads/official/sounds/dc_dotf-beta-11-1999_sounds.zip">Sounds Extracted from .KAT Sound Banks [Mirrior] (2.5 MB)</A></li>
  <li><A href={config.PUBLIC_ROOT + "2020/11/10/edp/Ecco_the_Dolphin_GD-R_V0.100_1998.10.23.rar"}>Ecco Defender of the Future Prototype 11-1999 Disc Image (192 MB)</A></li>
  <li><A href="https://mega.nz/file/stxAXTxT#yeHT0ddsV7cUzMfLkw7XJvqCVYpYsXdG3PqBhbR-t8c">Ecco Defender of the Future Prototype 11-1999 Disc Image [Mirrior]</A></li>
</ul>

</Document>

);}
