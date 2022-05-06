import React from 'react';

import {styled} from "@mui/material/styles";
import T from '@mui/material/Typography';

import Document from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';

import {Context, H2, H3, Subheader, A, S, P, Media, Image, Collage} from '../lib/Toolbox';
import config from '../config';

export default function JGJ_2021_8_8() {

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Hacking</PathItem>
    <PathItem>/</PathItem>
    <PathItem>Ecco Motion Physics</PathItem>
  </>;

  return (
    <Document
      icon={<DolphinIcon />}
      title="Ecco Motion Physics"
      media="2020/12/21/emp/banner.png"
      category="Hacking"
      headline="Ecco Motion Physics"
      byline="December 21st, 2020 by Johnny L. de Alba"
      tldr="The Motion Physics of Ecco the Dolphin"
      path={Path}
    >
      
       <P>
         Ecco the Dolphin uses a precalculated table of sinewave values to update the players position between transitions. A transition occurs when the player causes Ecco to move in one of eight directions. These directions include up, up-right, right, right-down, down, down-left, left, up-left and up. The transition itself is a set of animation frames that allow Ecco to face a desired direction. As a transition occurs, Ecco is repositioned according to the precalculated sinewave table. More interestingly this same sinewave table is used in conjunction with another table to create the ripple effect used on the message screens.
       </P>

       <Image
         float="right"
         url="2020/12/21/emp/ecco-motion-physics.gif"
         caption="Dolphin movement in Ecco the Dolphin is unique from any other game."
       />

       <H2>Why Use a Sinewave Table for Movement?</H2>

       <P>
         The purpose of using a sinewave table for movement is to allow the dolphins in the game (including Ecco) to have fluid, wave like motions. Without this table it would be impossible for the player to quickly move Ecco in uninterrupted perfect circles, half circles or periodic waves.
       </P>

       <P center>
         <S color="red" bold>
           ***In this article we will be using <A href="/2020/12/21/emp/ECCO_2_US_JUNE_1994-NOSINE.MD">ECCO_2_US_JUNE_1994.MD</A> for all of our examples. It is the June 1994, US version of Ecco 2: The Tides of Time.***
         </S>
       </P>

       <H2>Table Structure</H2>
       <P>
         The sinewave table begins at offset 0x2BC8 and is 512 bytes in size. It is made up of two parts: A Y-Axis Table, and an X-Axis Table. Both tables are used in conjunction with each other to produce X and Y offsets that are needed for transitions and ordinary movement.
       </P>

       <P>
         Preceding the sinewave table is another table known as the physics pointer table. It’s a table made up of 8 addresses to swappable physics functions. These functions control Ecco’s physics depending on his environment or what action he is performing. After the physics pointer table is a table signature labeled “ECCO” followed by 8 bytes of values.
       </P>

       <P>
         The X and Y tables are 256 bytes in size containing values that represent half a circle if used on a Cartesian coordinate system. Each byte represents a positive or negative integer with positive values that range from 0x0 through 0x7F (hexadecimal) or 0 through 127. In contrast 0xFF through 0x80 represents negative values that range from -1 through -128 (keep in mind 0xFF represents -1 on most architectures).
       </P>

       <Image url="2020/12/21/emp/dolphin-physics-map.png" />

       <H2>Transitional Arrays</H2>

       <P>
         To better understand the structure of the X and Y Tables, I will break them up further into transition arrays. Each table contains eight transition arrays with each array being 32 bytes in size. A transition array begins with a set direction; this represents one of the eight player movable directions. The first byte of a transition has special meaning, it represents a movable direction. It’s used for both transitions and basic movement. As an example let’s examine the right transition array.
       </P>

       <Image url="2020/12/21/emp/dolphin-physics-map-highlights.png" caption="The Sinewave Table is made up of two parts: The Y-Axis Sinewave Table and X-Axis Sinewave Table."/>
       <Image url="2020/12/21/emp/dolphin-xy-sinewave-tables.png" caption="The labels in this example mark the begining of a transition array." />

       <H2>Transitional Arrays</H2>
       <P>
         To better understand the structure of the X and Y Tables, I will break them up further into transition arrays. Each table contains eight transition arrays with each array being 32 bytes in size. A transition array begins with a set direction; this represents one of the eight player movable directions. The first byte of a transition has special meaning, it represents a movable direction. It’s used for both transitions and basic movement. As an example let’s examine the right transition array.
       </P>

       <P>
         The X and Y tables both contain a right transition array, with the X table containing an X offset and the Y table containing a Y offset. The first byte of the right transition array for the X table has a value of 0x40. While the first byte of the right transition array for the Y table contains a value of 0x0. When you combine these two values you get a direction coordinate of (X: 0x40, Y: 0x0); This value informs the game to move Ecco 4 pixels horizontally, and 0 pixels vertically (while Ecco is moving full speed). In other words, it moves Ecco 4 pixels toward the right!
       </P>

       <P>
        Upon close inspection of the right transition array, we can see it is followed by a down-right transition. The 20 bytes of a right transition array are actually offsets that position Ecco into the down-right direction. Following the down-right transition array is the down transition. The bytes contained in the down-right transition are (you guessed it) offsets that position Ecco facing down.
      </P>

      <H2>Ecco 2 No Sine Example</H2>
 
      <Image url="2020/12/21/emp/dolphin-xy-nosinewave-tables.png" caption="A view of the different transition points on Ecco 2 No Sine." />

      <P>
        The best way to understand how motion physics work in Ecco the Dolphin is through example. To demonstrate this I created a hacked ROM that zeroes out the entire table except the eight key values that correspond with a direction. I have named this file <A href="https://eccothedolphin.online/ecco-motion-physics/ECCO_2_US_JUNE_1994-NOSINE.MD">ECCO_2_US_JUNE_1994-NOSINE.MD</A>. We will refer to it as Ecco NoSine.
      </P>

      <P>
        What Ecco NoSine does is only allow basic eight way movements. It causes Ecco to have to stop every time he has to transition toward a new direction. For example, if Ecco were to swim left, then changed direction to swim down, he would have to stop completely in order to make that transition. What normally occurs is Ecco would grab values from the sinewave table that would in turn smoothly reposition him. Removing all of Ecco’s transition movements causes him to suddenly stop every time he changes direction. But what would happen if we zeroed out the entire table? 
      </P>

      <P>
        If we were to zero out the entire sinewave table it would cause Ecco to be unable to move at all. The animations for his movements and transitions would still work but he would become completely stationary. That’s because the values from the X and Y tables determine how many pixels Ecco needs to move per frame. These values are also used to update Ecco’s position during a direction transition.
      </P>

      <H2>Theory: Understanding How the X, Y Offsets Work</H2>

      <P>
        A value in a transition array somewhat represents how many pixels Ecco can move across the screen per frame. A positive value between 0 and 0x7F (127) represents a percentage of Ecco’s maximum speed. If Ecco’s maximum speed is 8 pixels, and the value for the right direction is 0x40, then Ecco’s maximum speed in that direction will be 4 pixels. Remember 0x7F represents 100% of the maximum speed, this means 0x40 is half the maximum speed or 8 pixels.
      </P>

      <P center bold color="yellow">(MAX_SPEED * MAX_SPEED_PERCENTAGE) = PIXELS_PER_FRAME</P>
      <P center bold color="yellow">(8 * [0x40]) = PIXELS_PER_FRAME</P>
      <P center bold color="yellow">[0x40] EQUALS 50%</P>
      <P center bold color="yellow">(8 * 50%) = 4 = PIXELS_PER_FRAME</P>

      <P>
        When Ecco uses his charge attack the maximum speed for any given direction is doubled! If the player uses a charge attack in the right direction, Ecco will travel across the screen by 8 pixels! This is derived from the percentage for the right direction (0x40 or 50%) multiplied by maximum speed (8 pixels) which gives us 4 pixels multiplied by 2, or 8 pixels! 
      </P>

      <P center bold color="yellow">(MAX_SPEED * MAX_SPEED_PERCENTAGE) * 2 = PIXELS_PER_FRAME</P>
      <P center bold color="yellow">(8 * [0x40]) * 2 = PIXELS_PER_FRAME</P>
      <P center bold color="yellow">[0x40] EQUALS 50%</P>
      <P center bold color="yellow">(8 * 50%) * 2 = 8 = PIXELS_PER_FRAME</P>
     
      <P>
        A negative value in a transition array works exactly like a positive value does. The only difference is a negative value represents a percentage of the maximum speed in the opposite direction. A negative range starts with 0xFF (1%) and ends with 0x80 (100%).
      </P>

      <Media
        url="https://www.youtube.com/embed/d1CEDhgNz_o"
        caption="In this video the values from Ecco's left transition arrays were swapped with values from the right transition arrays."
      />

      <H2>Theory: How Movement Type Effects Positioning</H2>

      <P>
        How many pixels Ecco moves across screen is determined by a derived value and type of movement. A derived value is what you get when you take a value for a direction (from a transition array) and multiply it by the maximum speed. In the previous paragraph we explored how a value from a transitional array represents a percentage. Types of movement can effect a derived value. There are three types of movements: slow, fast and charge.
      </P>

      <P center bold color="yellow">DERIVED_VALUE EQUALS PIXELS_PER_FRAME</P>

      <P>
        When the player presses any button on the directional pad it causes Ecco to slowly swim across the screen. The game determines how many pixels Ecco should moved by taking the derived value and dividing it by 2. If Ecco is slowly swimming toward the right, we calculate the derived value by taking 50% (0x40) of the maximum speed (8 pixels) and divide that by 2, which gives us roughly 1 to 2 pixels (represented as 1 pixel in the game).
      </P>

      <P bold>Slow Movement:</P>
      <P center bold color="yellow">(MAX_SPEED * MAX_SPEED_PERCENTAGE) / 2 = PIXELS_PER_FRAME</P>

      <P>
        Fast and Charge movements have already been somewhat discussed but we will go over them again. When Ecco is moving fast the derived value becomes the amount of pixels to move per frame. When Ecco uses his charge attack the pixels per frame are doubled!
      </P>

      <P bold>Fast Movement:</P>
      <P center bold color="yellow">(MAX_SPEED * MAX_SPEED_PERCENTAGE) = DERIVED_VALUE OR PIXELS_PER_FRAME</P>

      <P bold>Charge Movement:</P>
      <P center bold color="yellow">(MAX_SPEED * MAX_SPEED_PERCENTAGE) * 2 = PIXELS_PER_FRAME</P>
      <P center bold color="yellow">DERIVED_VALUE * 2 = PIXELS_PER_FRAME</P>

      <Media url="https://www.youtube.com/embed/JvNBU-Lyj4w" caption="In this video Ecco's max speed percentage for the right direction is set to 0x7F the maximum value for that direction." />

      <H2>Speculation: A Closer Inspection at Transitions</H2>

      <P>
        It’s difficult to say exactly how transitions work without creating a proof of concept or by inspecting the code. By inspection I am referring to allowing the code to execute and examining the process step by step. Instead I opted to further hack Ecco 2 NoSine by altering the Down-Right to Down transition.
      </P>

      <P>
What I did was change the first 16 bytes of the Down-Right to Down transition with the values 0x80. This tells the game to move Ecco toward the left roughly 4 pixels per frame. I then observed Ecco transition from Down-Right to Down which caused him to move a total of 32 pixels. This was the result of only using half of the 32 bytes in a transition array. But what if I altered all 32 bytes to 0x80? I ended up doing just that, which caused Ecco to move a total of 64 pixels!
      </P>

      <Image
        url="2020/12/21/emp/dolphin-down-right-down-1.png"
        caption="Half of the down-right transition array is set to 0x80. This causes Ecco to move 32 pixels to the left when he changes direction from down-right to down."
      />

      <Image
        url="2020/12/21/emp/dolphin-down-right-down-2.png"
        caption="All of the down-right transition array is set to 0x80. This causes Ecco to move 64 pixels to the left when he changes direction from down-right to down."
      />

      <P>All of the down-right transition array is set to 0x80. This causes Ecco to move 64 pixels to the left when he changes direction from down-right to down.</P>

      <P>
        From my observation it’s safe to assume not all of the values in a transition array are used when changing direction. If they were then Ecco would have moved a total of 128 pixels. Either that or the rules are different when Ecco transitions between movements. The Down-Right to Down transition uses a total of 4 animation frames, with a delay that occurs inbetween frames. If we combine the frames with the frame delays and got a total of 16 total frames, then multiplied those by 4 we’d end up with 64.
      </P> 

      <P>
        The problem with this overall scenario is I only tested one frame transition. I also assumed the amount of pixels Ecco moved after a transition were correct. The way I measured the change in pixels was by taking the center of one animation and subtracting it from the center of the final animation. This could be completely incorrect and I won’t know without further testing or creating a proof of concept. If it is indeed incorrect I will append this article with the correction!
      </P>
      
      <H2>Conclusion</H2>

      <P>
        What I was able to figure out was Ecco’s motion is tied to a sinewave table. This sinewave table allows Ecco to transition between directions without interrupting the flow of motion. Unfortunately some of the material presented here are either theories or speculation. Without taking what’s presented here and creating a proof of concept I won’t know for sure if what I observed is the complete picture. I am fully confident that there is enough material here to fill in most of the picture. My goal when writing this article was for those who need this resource now. As these things are put to test I hope to eventually fill in the missing gaps. For now we will wait and see.
      </P>

      <H2>Bonus: Swappable Physics</H2>

      <P>
        Ecco uses swappable physics functions that are selected from a physics pointer table. This table has a total of 8 different physics functions that are used depending on Ecco’s actions or environment. These functions are used for basic movement, water buoyancy, out of water physics, and Ecco’s pinwheel flip.
      </P>

      <H2>An Explaination of the Assembly</H2>

      <Image
        url="2020/12/21/emp/dolphin-physics-function-pointer.png"
        caption="A view of the Ecco 2 disassembly loaded in radare2, a program for reverse engineering software."
      />

      <P>As with all Mega Drive/Sega Genesis games, Ecco is made up of 68000 machine code. Through my interactive dissembler I can examine the dissembled code and understand how it works.</P>

      <P>On line 0x00084C3A, the ROM address 0x2B9C is loaded into register A1; this is the start address of the physics pointer table.</P>
      
      <P>
        On line 0x00084c40 register D0 is loaded with a value from somewhere in memory. On the following line D0 is multiplied by 4 and added to the address contained in register A1. The resulting address is to one of the swappable physics functions contained in the pointer table.
      </P>  

      <P>Finally on line 0x00084C4A a function is executed at the address contained in A1.</P>

      <H2>Types of Physics</H2>

      <P>There are a total of 8 swappable physics functions with 4 of them being the most prominent.</P>

      <Media
        url="https://www.youtube.com/embed/VwER1wYlcPU" 
        caption="In this video I removed Ecco's basic underwater physics which caused him to no longer be able to move."
      /> 

      <P>
        <S color="yellow" bold>0x84110 – BASIC UNDERWATER PHYSICS</S> - Controls Ecco’s basic underwater movements, including acceleration, charging and position transitions.
      </P>

      <P>
        <S color="yellow" bold>0x84256 – WATER BUOYANCY</S> – This occurs when Ecco is partially above the water’s surface. It creates the effect of buoyancy, allowing him to bobble or float along the surface.
      </P>

      <P>Ecco can no longer float, or bobble along the surface when water buoyancy is disabled like ib this example video.</P>

      <P>
        <S color="yellow" bold>0x84408 – PINWHEEL FLIP</S> – This occurs when Ecco jumps high enough and the player taps the acceleration button. It causes Ecco to do a pinwheel flip in the air.
      </P>

      <P><S color="yellow" bold>0x84458 – NOT DOCUMENTED YET</S> – Triggered on water reentry.</P>
      <P><S color="yellow" bold>0x84074 – NOT DOCUMENTED YET</S> – Triggered on water reentry.</P>

      <P><S color="yellow" bold>0x843b8 – OUT OF WATER PHYSICS</S> – This occurs when Ecco leaps out of water, causing him to fall.</P>

      <P><S color="yellow" bold>0x8400a – NOT DOCUMENTED YET</S> - Dummy function, doesn’t do anything, returns immediately.</P>
      <P><S color="yellow" bold>0x8400c – NOT DOCUMENTED YET</S> – A small function possibly used for chaining different physics functions together.</P>

      <H2>Chained Physics</H2>

      <P>
        Different physics functions can be chained together to create a combination of effects. When Ecco jumps out of water and does a pinwheel flip, the PINWHEEL FLIP physics function is executed then switches back to the OUT OF WATER PHYSICS once the flip is complete. If the PINWHEEL FLIP physics were to be disabled then Ecco would just float in the sky. This is caused by his inability to fall due to a lack of the game being able to move down the function chain.
      </P>

      <Media
        url="https://www.youtube.com/embed/doTixMcMAEE"
        caption="Ecco's pin wheel flip is a chained function that has to switch to out of water physics when it's finished executing. In this video I disabled the pin wheel flip to demonstrate what happens when a chained function can't do its job."
      />

      <H2>Download</H2>
      <ul><li><A href="2020/12/21/emp/ECCO_2_US_JUNE_1994-NOSINE.MD">ECCO_2_US_JUNE_1994-NOSINE.MD</A></li></ul>
    </Document>
  );
}
