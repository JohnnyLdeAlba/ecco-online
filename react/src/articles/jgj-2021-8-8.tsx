import React from 'react';

import {styled} from "@mui/material/styles";

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, H3, Subheader, A, B, I, P, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function JGJ_2021_8_8() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Community Spotlight</PathItem>
    <PathItem>/</PathItem>
    <PathItem>JAMATAR</PathItem>
  </>;

  return (
    <Document
      icon={<DolphinIcon />}
      title="Community Spotlight: JAMATAR"
      media="2021/8/8/jgj/banner.png"
      category="Community Spotlight"
      headline="Community Spotlight: JAMATAR"
      byline="August 8th, 2021 by Johnny L. de Alba"
      tldr="Musician, Chiptune Artist and Sound Engineer"
      path={Path}
    >

      <P>
        JAMATAR is a musician known for using a Game Boy Color during his performances. Looking to expand his show,
        he started researching ways to incorporate music from the Mega Drive. He eventually discovered GenMDM: A device capable of tapping into the sound capabilities of the Mega Drive.
        As he tinkered with it he devised a way to enhance it. This lead to the creation of GENajam. 
        It’s a device that interfaces with GenMDM that allows it to be configured to play instruments from any Mega Drive game.
      </P>

      <Image
        float="right"
        url="2021/8/8/jgj/jamatar-profile.jpeg"
        caption="JAMATAR's performances are an experience like no other!"
      />

      <P>
        I learned about JAMATAR through Twitter where he uploaded his latest song. It was composed using instraments from Ecco the Dolphin!
        I was impressed with his music and wanted to learn more about his project GENajam.
        I was also curious about his experience performing at live events and how he acquired the ultra rare MegaJet.
        When he agreed to be interviewed by us I was honored.
      </P>

      <P><B>How long have you been making music?</B></P>
      <P>
        <B>JAMATAR:</B> I've been writing music since I was 17 so I guess.... 20 years now!
        I started out writing with really early versions of Cubase and so now that's my main DAW :)
      </P>

      <P><B>What was your first game console?</B></P>
      <P>
        <B>JAMATAR:</B> My first game console was the Atari 2600 Jr which came out in 1986. My brother played it more at the start but I remember
        trying to play Empire Strikes Back and not know what was going on. It has a very iconic sound chip, very punchy and recognizable.
      </P>

      <P><B>What is your all time favorite video game?</B></P>
      <P>
        <B>JAMATAR:</B> I'd have to say Betrayal at Krondor on PC. It introduced me to RPGs at a very early stage. I didn't have a SNES so I missed out on all those early classic RPGs.
        I loved the world building, exploration, combat and secrets. It was such a rich and polished story that was written by author of the original Riftwar novels, 
        just really high quality right off the bat. Great music too!
      </P>

      <P><B>What inspired you to use retro game hardware as your instruments?</B></P>
      <P>
        <B>JAMATAR:</B> I definitely grew up with the Gameboy as my childhood soundtrack. I used to go on family trips and I'd sit in the back seat with my original 
        DMG and headphones trying to finish mario or gradius or operation C. I loved the Konami games because they always had a sound test mode where 
        you could listen to the BGM on its own. I used to listen to it like a walkman :D As I grew up and learnt more about music making, 
        I think I went back and realised that this stuff was made using only 3 channels of melody, sometimes 2 with clever panning and arpeggios.
      </P>

      <P><B>What game music influenced you the most?</B></P>
      <P>
        <B>JAMATAR:</B> There's a game on Gameboy called Burai Fighter Deluxe. I think it is a Gameboy port of a NES game, 
        meaning that the music and assets were developed for the NES and it was adapted. The music is so iconic and they really did a great job 
        enhancing it for the stereo sound of the Gameboy. Just some really awesome melody lines, really simple but also really awesome! 
        I strive for that kind of sound with my music and lead lines :) Simple is better!
      </P>

      <Media url="https://www.youtube.com/embed/_nLA5kXui2M" />

      <P><B>What console (or handheld) would you say produces the best music?</B></P>
      <P>
        <B>JAMATAR:</B> My brother had an Atari Lynx growing up and that thing has some awesome sound! Really beefy and it has a very distinctive snappy noise channel. i
        A guy in Melbourne named Ctrix has written some tunes on the Lynx, it's really great. I recently got a Sega Megajet which has an updated Yamaha FM synth chip in it, 
        it's very clean, like a Yamaha DX7. You can make lots of interesting sounds on it.
      </P>

      <P><B>You perform live events, what is that like, how did you get involved with that?</B></P>
      <P>
       <B>JAMATAR:</B> I got in contact with our local scene in Melbourne, there were a lot of friendly people to approach who are ready to help out anyone who wants a go.
        My first show was at an open mic at the preparty for Square Sounds. In fact if you are in Australia, reach out to the Melbourne Chiptune Academy!
      </P>

      <Image
        url="2021/8/8/jgj/genmdm-genajam.jpg"
        caption="GENajam (on the left) is a device that compliments GenMDM (on the right)."
      />



      <P><B>What is GenMDM?</B></P>
      <P>
        <B>JAMATAR:</B> GenMDM is a hardware solution for Mega Drive / Genesis created by Little-scale (http://little-scale.com/) that lets you access all functions of the FM soundchip on board via MIDI. 
        This means you can use your music software to program and sequence the Mega Drive and have access to all the sound sculpting parameters!
        It was originally made by Little-scale in a limited run but recently Catskull Electronics made a revised modern version and sells it via their website
        (<A href="https://catskullelectronics.com">https://catskullelectronics.com</A>).
      </P>

      <P><B>What is GENajam exactly?</B></P>
      <P>
        <B>JAMATAR:</B> When I bought a Mega Drive for music, I also purchased GenMDM to make music. However, I use Cubase and I also wanted to use the Mega Drive live and 
        GenMDM works best in Ableton with a special plugin that Little-scale wrote to support it. GENajam is a secondary hardware solution that basically converts 
        the Mega Drive with GenMDM into a stand alone FM synth, with preset loading, polyphony and hardware editing. It means it makes the Mega Drive closer to 
        something like a Yamaha DX100 or Reface DX. I'm currently working with Catskull Electronic to get this into production!
      </P>

      <P><B>Tell us about your setup. What hardware and software do you use?</B></P>
      <P>
        <B>JAMATAR:</B> I'm going to integrate Mega Drive into my set but at the moment, I run Cubase running out to an interface to which I send MIDI to a Gameboy and run it through effects.
        I also run my guitar into Guitar Rig 2.
      </P>

      <P><B>Tell us about your MegaJet, what is a MegaJet?</B></P>
      <P>
        <B>JAMATAR:</B> I found the Mega Jet in a shop called Super Potato in Nagoya. Super Potato in Tokyo is pretty popular and gets cleaned out regularly by tourists but the Nagoya store 
        was very much untouched and had a lot more awesome stuff. I knew I wanted to buy a Mega Drive but I didn't really know which one. When I saw it, I had never even heard 
        of it before and sorta just stood in the store googling all the info I could find about it!
      </P>

      <P>
        <B>JAMATAR:</B> Mega Jet was a Mega Drive launched on Japan Airlines as a way to show off their newly installed LCD displays in the 90s. It was only available on business and first class.
        They released a very small run of them domestically and they have just sorta floated around the world. It's estimated there are only about 10-15 thousand of them around.
        This one was going for a pretty good price so I grabbed it! I'm glad I did, it's got a slightly newer updated FM chip in it and it sounds very clean and pure.
      </P>

      <Image
        url="2021/8/8/jgj/megajet.jpg"
        caption="The MegaJet is a compact Mega Drive that was released in limited quantities."
      />



      <P><B>Tell us about the Ecco patches were these something you made?</B></P>
      <P>
        All the Ecco patches I used are TFI instrument dumps taken directly from the Ecco game. They're simply a dump of the FM parameters on the internal sound chip into a file. 
        GENajam can then use the parameters and send them back into the Mega Drive from SD card.
      </P>

      <P>
        I have always loved the synths used on the title screen of Ecco 1. There's something very beautiful about the way they evolve. Ecco has some very beautiful, 
        earthy and deep custom FM sounds. It's kind of rare for Mega Drive games to have that kind of pad work in music.
      </P>

      <P><B>Out of all the Ecco the Dolphin games which one is your favorite and for which console?</B></P>
      <P>
        I've got a confession I've only really played Ecco 1 so I'm going to go on an Ecco journey and try some of the other ones. 
        Defender of the Future on Dreamcast has always looked amazing to me, I'll have to find out a way to get that one going!
      </P>

      <P><B>Out of all the Ecco the Dolphin games which one is your favorite and for which console?</B></P>
      <P>
        I've got a confession I've only really played Ecco 1 so I'm going to go on an Ecco journey and try some of the other ones. 
        Defender of the Future on Dreamcast has always looked amazing to me, I'll have to find out a way to get that one going!
      </P>

      <Image url="2021/8/8/jgj/standing-ovation.jpeg" />

      <P><I>* * Thank you JAMATAR for sharing your project with us! We look forward to your future endeavours with GENajam and your music!</I></P>

      <H3>Links</H3>
      <ul>
        <li><A href="http://jamatar.com/">JAMATAR's Official Website</A></li>
        <li><A href="https://twitter.com/Jamatarmusic">JAMATAR's Twitter</A></li>
        <li><A href="https://github.com/jamatarmusic/GENajam">GENajam Project on GitHub</A></li>
        <li><A href="https://catskullelectronics.com/">Catskull Electronics: The Official website for GenMDM</A></li>
      </ul>
    </Document>
  );
}
