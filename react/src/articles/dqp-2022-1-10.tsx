import React from 'react';

import {styled} from "@mui/material/styles";

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, P, Red, Yellow, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function DQP_2022_01_10() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>News</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Dolphin's Quest Preview</PathItem>
  </>;

  return (
    <Document
      icon={<DolphinIcon />}
      title="Dolphin's Quest Preview"
      media="2022/1/10/dqp/banner.png"
      category="News"
      headline="Exclusive Preview: Diving into Dolphin's Quest"
      byline="January 1st, 2022 by Johnny L. de Alba"
      tldr="Dolphin's Quest is an upcoming title for the Amico Intellivision and other platforms. It is currently under development by Ed Annunziata's company PlayChemy."
      path={Path}
    >
      <H2>Working with the Master</H2>

      <P>
        It was a Saturday in December, I couldn’t sleep the previous night.
        I waited all week for this day to come, the occasion was an event called the Sacramento Gamer’s Expo.
        There I was going to hang out with Ed Annunziata, the creator of Ecco the Dolphin.
        I think I was about 30 or 40 minutes early before I ran into Ed in the parking.
        We had a lot to talk about as I am what you’d call something of a fan.
      </P>

      <P>
        I been following Ed’s work since I was a kid. His game Ecco the Dolphin has been my life!
        I’ve run three different websites on and off throughout the last 20 years, all centered around Ecco the Dolphin.
        Each iteration had a community of fans who contributed anything and everything that helped the community grow.
        I reverse engineered different aspects of the original Ecco games.
        I built an animated Ecco Text Generator, two Ecco Password Generators, and software that can extract Ecco sprites and level maps!
        I even built a game engine inspired from Ecco 2’s engine.
        You’d think I had a lot of questions for Ed but I probably talked his head off more about myself.
      </P>
     
      <H2>A First Hand Account of Dolphin Quest</H2>

      <P>
        So what is Dolphin’s Quest exactly? For those who know about it, I have heard terms tossed around such as “an Ecco spiritual successor”.
        As I talked to Ed about it, I don’t really see that as correct. Dolphin’s Quest is its own thing.
        Ed’s vision for this game is not exactly as grandiose as say an Ecco successor. It has all the elements of an Ecco game but lacked the epic story.
        Ed’s idea was more along the lines of Ecco Jr as he put it. Something that the kids and their friends could play together.
        At first I thought this idea was crazy but the kids at the event who played it that day loved it!
        It was not just kids who were drawn to it, but adults too, many of whom may have never played Ecco before.
        Pat Contri, a well known YouTuber was at the event and played it several times. He even taught me a thing or two about it.
      </P>

     <Image caption="Zsolt the Dolphin challenges the player to a jumping contest." url="2022/1/10/dqp/dolphins-quest-jump.jpg" />

      <P>
        The more I played Dolphin’s Quest the more I realized Ed’s vision made sense. Most casual Ecco fans spend more time enjoying Ecco’s game mechanics than actually playing it.
        Ecco as a game is a bit of a genre on its own. You play as a Dolphin who moves swiftly through land and air.
        You can dash through the underwater world or leap high into the air, over rocks and other obstacles.
        The Ecco series has spawned three games that to this day have yet to fully tap into the serie’s potential.
        It’s a platformer, an underwater game, and race for survival all wrapped up into one.
      </P>

      <P>
        What Dolphin’s Quest promises is a game that you can play with your friends. Ed mentioned there are two versions of Dolphin’s Quest that he hopes to release.
        One allows up to four players and would be exclusive to the Amico Intellivision. The other would be for the Nintendo Switch and other platforms.
        The version showcased at the event was actually the later, which was running on a Windows based laptop. That isn’t to say the game will be released on PC.
        It was built in Unity after all: A prototype that featured a large unfinished stage filled with gameplay mechanics. An alpha build so to speak.
        All the different mechanics found in the game’s lone stage were likely not planned for a single stage but were built to be split up among several stages.
        The stage I played likely won’t be in the final game. So what were the different mechanics and what exactly could you do in this game?
      </P>

      <H2>An Entire Game Wrapped into a Single Stage</H2>

      <P>
        Let’s start from the beginning, the game didn’t featured a title screen. When launched it goes straight to the game’s sole stage.
        The stage is large and filled with many different objects and activities that the player can activate.
        The Dolphin can swim, leap, and communicate with other dolphins and whales using sonar.
        The sonar can also bring up a map that displays part of the stage along with all creatures in the vicinity.
      </P>

      <P>
        The sonar isn’t limited to communication and maps, it can be used to “grab” and move things around. This ability appears to be a core mechanic of the game.
        For example, near the end of the stage is a large orb that blocks the exit. The orb has several holes in it that the Dolphin must fill with pearls.
        To obtain the pearls, the Dolphin must open clams scattered throughout the stage. Opening the clams requires the Dolphin’s sonar “grabbing” ability.
        This works by sending a sonar to the clam and holding down on the sonar button which causes the sonar to turn into a beam.
        Once the beam latches onto the clam, the Dolphin can use the beam like a lasso to pull the clam open.
        Collecting all the pearls and bringing them to the giant orb will cause it to tumble away revealing the stage’s exit.
        This isn’t the only passage that requires the Dolphin’s lasso beam. In another part of this stage is a lever that when pulled, opens a hatch to a tunnel.
        You can latch onto the lever with the sonar lasso to change its position.
      </P>

      <Media caption="Opening a clam with the sonar lasso." url="https://www.youtube.com/embed/esHviwwdbGo" />

      <P>
        The most interesting aspects of the Dolphin’s lasso ability is when it is used to snag fish. 
        In this situation, the beam gives the Dolphin the ability to control fish and move them around.
        I don’t remember what that mechanic was used for but I can imagine it could be used to navigate the fish through small passages the Dolphin can’t enter.
      </P>

      <P>
        One of the activities people enjoyed the most about Dolphin’s Quest was jumping into the floating water spheres. 
        The objective was to jump from one floating sphere to the other and ascend onto a large floating block of water. 
        This block of water was obviously a place holder for a floating island with a lake. The block had one unintentional flaw: 
        If the player jumped out and tried to land back in, they would fall through it as if the water was no longer there.
      </P>

      <P>
        Above the block of water were more spheres that were trickier to land in. Each sphere allowed the Dolphin to ascend further.
        I managed to use these spheres to ascend over a wall that lead to the outside of the game world which in turn caused the Dolphin to fall endlessly, I even got this fall on video!
      </P>


      <Media caption="In this video I managed to make the Dolphin jump out of the game world." url="https://www.youtube.com/embed/Pn8jZQoiuog" />
      <Media caption="A beautiful world to explore." url="https://www.youtube.com/embed/vq2Tiuka3nY" />

      <P>
        Other activities included riding through a strong current that blasts the Dolphin high into the sky. 
        In another part of the stage, you’ll search for a mother’s lost calf. 
        If you dive down deep enough, you’ll find a beautiful maze filled with different creatures like a large Jelly Fish, a shark and more. 
        Remember that large orb I mentioned? It protects an unfinished portion of the stage that looks like futuristic ruins.
      </P>

      <P>
        The deeper you ascend into the stage, the darker it becomes. You’ll eventually find a portion of the stage that can only be lit up using the sonar.
        In this part of the stage, the camera zooms closer to the Dolphin making it even more difficult to see.
      </P>

      <P>
        Last but not least, I should mention the Dolphin race. Deep in the caverns below is a Dolphin who will challenge you to a race. If you accept,
        you’ll swim through a passage designed specifically for the race. If the player loses track of the Dolphin, there is stream of light that they can follow which can guide them.
        The race reminds me of an event that occurred in Ecco 2, where the player had to follow a dolphin named Blackfin to the exit. 
        Blackfin was notorious for being fast and hard to follow, even mocking the player about it. 
        The only difference with the race in Dolphin’s Quest is it is not as frustrating thanks to a stream of light that guides the player along the path.
      </P>

      <H2>Final Word</H2>

      <Collage
        columns={3}
        list={[
          "2022/1/10/dqp/dolphins-quest-catch-me.jpg",
          "2022/1/10/dqp/dolphins-quest-jump.jpg",
          "2022/1/10/dqp/dolphins-quest-zsolt.jpg",
          "2022/1/10/dqp/dolphins-quest-mother.jpg",
          "2022/1/10/dqp/dolphins-quest-control-fish.jpg",
          "2022/1/10/dqp/dolphins-quest-sonar-map.jpg"
        ]} />

      <P>
        So what’s my verdict on Dolphin’s Quest? Even though it’s designed around the idea of fun for the family,
        I’m willing to go out of my way and purchase an Amico exclusively for the game. What sold me was it looked like something I could enjoy with my daughter.
        This could be the game that finally makes her interested in my little Ecco hobby. Plus Ed knows what he’s doing, even though I want an Ecco 3,
        if this wins over my daughter with Ecco in general, then this could actually be better in many ways.
      </P>

    </Document>
  );
}
