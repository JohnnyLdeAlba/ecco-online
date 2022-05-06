import React from 'react';

import {styled} from "@mui/material/styles";

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, H3, Subheader, P, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function DQP_2022_01_10() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>News</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Happy Two Year Anniversary</PathItem>
  </>;

  return (
    <Document
      icon={<DolphinIcon />}
      title="Happy Two Year Anniversary Ecco Online!"
      media="2021/11/14/hty/banner.jpg"
      category="News"
      headline="Happy Two Year Anniversary Ecco Online!"
      byline="November 14th, 2021 by Johnny L. de Alba"
      tldr="Our community celebrates its 2 year anniversary."
      path={Path}
    >

      <P>
        November 10th was the two year anniversary of Ecco the Dolphin Online. Two years ago today I had no idea what I was doing as 
        I stumbled back into a scene I had abandoned more than a decade prior. 
        My return had a grander purpose besides starting a new community: I wanted to reverse engineer the games and build a new game engine.
      </P>

      <P>
        In two years time I have exceeded my expectations, we now have the largest collection of sprites and level maps from the Ecco the Dolphin series.
        We also have an awesome animated text generator that can produce GIFs that look exactly as the messages do in the game.
        We have our own state of the art password generators for both Ecco 1 and 2! So what’s next? Let’s go over some of our (or my own) ongoing projects.
      </P>

      <Image
        float="right"
        url="2021/11/14/hty/ecco2-text-generator-preview.jpg"
        caption="The Ecco Password Generators can generate and decode passwords from all of the 16-bit Ecco the Dolphin games."
      />

      <H2>Project Enigma Machine:</H2>
      <H3>The Ecco Password Generators</H3>
      <Subheader>98% Complete</Subheader>

      <P>
        Project Enigma Machine’s goal was to reverse engineer the 16-bit Ecco Password formats and produce a tool that can both generate and decode passwords. 
        This is similar to what Alan Turing had done in the 1940s to break the Enigma Machine code that helped the allied forces win World War 2. 
        All that is left with this project is general code cleanup and reorganization. It will be ready for open source release soon.
      </P>

      <H2>Project Black Omen:</H2>
      <H3>A Graphical Extraction Tool for the 16-bit Ecco Series</H3>
      <Subheader>60% Complete</Subheader>

      <P>
         Project Black Omen is the crown jewel of my work, it’s a tool that can extract graphical assets from all of the 16-bit Ecco the Dolphin games.
         This includes sprites, tiles, blocks, and the ability to generate level maps.
         It’s a very sophisticated tool that was used to dump all the graphical assets found on our website.
         My goal is to build a cross platform tool that will allow users to dump their own graphics. I want it to be simple, yet powerful.
      </P>

      <P>
        In order to complete it I would need to do a lot of code cleanup. Some parts of it need to be redone and it needs an interface so people can actually use it. 
        Currently it’s only a library that has to be tweaked manually in order to produce anything.
      </P>

      <H2>Project Blue Dream:</H2>
      <H3>A Future Ecco the Dolphin Fan Game</H3>
      <Subheader>1% Complete</Subheader>

      <P>
        Blue Dream is a game engine that will be built using ideas that went into creating the original Ecco games.
        It’s a 2D game engine that will require the Ecco games own graphical assets in order to complete. 
        From there it could become anything but until Project Black Omen is complete Blue Dream cannot be realized as the two projects go hand in hand. 
        Ultimately Blue Dream will be a future fan made Ecco the Dolphin game.
      </P>

      <H2>Final Word…</H2>

      <P>
        Overall I have a lot of ongoing projects. For a single person I have managed to get a lot done and will continue to do so.
        This year was stalled with a 6 month break that I took to focus on other things (like life). Next year I want to put all my 
        energy into getting Blue Dream realized as well as continue to build upon Ecco Online’s overall preservation goal. 
        With that said, I appreciate all the support everyone has given me and will need it to continue to push myself going forward!
      </P>

      <P>
        On an important note, I rarely use the website to post important information regarding my projects or news about Ecco the Dolphin.
       If you would like more up to date information, follow our Twitter and Facebook pages.
      </P>

    </Document>
  );
}
