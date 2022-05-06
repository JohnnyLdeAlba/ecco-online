Patch:

0x1f88d0

Memory Map:

0xffff2bc8.w: ?Horizonal Diagonal Movement?
0xffff2cc8.w: ?Vertical Diagonal Movement?

0xffff5000: Background Block Tiles.
0xffff6000: Foreground Block Tiles.

0xffff9940.w 
0xffff97c0: ?8x8 Data Table?
0xffff9820: ..
0xffff9880: ..

0xffffa200

0xffffa480: /VDP Commands/

0xffffa51a.w: ?Pointer to VDP RAM? 0xc000
0xffffa51c.w: ?Pointer to VDP RAM? 0xe000
0xffffa51e.w: ?Pointer to VDP RAM? 0xb000

0xffffa520: 
0xffffa524.l: @0x282c 
* Compared to 0xe340 in 0x282c. 

0xffffa528.b: [0x40|0x80] 
* Typically set to 40. Set to 80 when 0x282c is called. 
* Possibly signals when to draw sprites.

0xffffa529.b
* Both 0xffffa528 and 29 might be used to pause execution 
* during an interrupt.

0xffffa532.l: [0xffff8000] @1a28 /RAM Pointer/ /Decompressed Data/
0xffffa536.l: [0xffff9a00] ..
0xffffa53a.l: [0xffff9c00] .. /VDP Commands/

0xffffa550.b: @0x279c ?Sprite Placement? 
0xffffa552.b: ..

0xffffa553
0xffffa554.w: [0x0420] ?Sprite Related?
0xffffa555
0xffffa556: [0x0420] ?Background Related?
0xffffa557 
0xffffa558
0xffffa55a

0xffffa55c.l: [0x0010afac] /Pointer to ROM/
0xffffa560.l: [0x0010afda] /ROM Pointer/VDP Commands/ 
0xffffa564.l: [0x0010b85a] /ROM Pointer/
0xffffa568.l: [0x0012a6b4] /ROM Pointer/

0xffffa570.l: [0x10ba36] /ROM Pointer/

0xffffa580.b: [0x00-0x05] @282c ?Counter? 
* A counter that compares against 0xffffa581.

0xffffa581.b: [0x06] @282c

0xffffa584: /Player 1 Controller/
0xffffa585: /Player 2 Controller/

0xffffa586.l: /Function Pointer/
0xffffa58a.l: /Function Pointer/

0xffffa594.w
0xffffa598.w
0xffffa59a

0xffffa7a0.l: @0x83b08 ?XY-Position Related? 
0xffffa7a4.l: ..

0xffffa7b0.w: @0x83b08 ?XY-Position Related?
0xffffa7b2.w: .. 

0xffffa7c8

0xffffa7d0.w: /Current Level Select/
*
*  Title Screen Segment
*  
*  00: Sega Logo
*  01: Title Screen (1)
*  02: Demo
*  03: Title Screen (2)
*  04: Prologue
*  05: Queen Falling Animation
*  06: Title Screen (3) - Repeats back to 02.
*

0xffffa7d2.l: [0x001152b2] /Level Data Structure/

0xffffa7e9

0xffffaa12: @0x202c *May signal begin and end of function pointer call. 
0xffffaa14: ..

0xffffaa16.b: [0x38] /Player 1 Health Meter/
0xffffaa18.w: [0x380] /Player 1 Air Meter/

0xffffabd8.b: ?Player 2 Health Meter?
0xffffabda.w: ?Player 2 Air Meter?

0xffffad84.w: @0x83b08 /Horizontal Scrolling/
0xffffad9c.w: ..

0xffffad88.w: @0x83b08 /Vertical Scrolling/
0xffffad9e.w: .. 

0xffffad8c.l @0x83b08

0xffffad90.l ..

0xffffada8.l: @0x83b08 ?HV-Scrolling Related?
0xffffadac.l: ..

0xffffadb8.b: @0x83b08

0xffffae46.b: [0x02]
0xffffae4e.w
0xffffae4c.w: [0x07a4]

0xffffd490.l: [0x0009b5d8] /Function Pointer/
0xffffd4a0
0xffffd4a4.w: [0xffffe374]
0xffffd4aa.w

0xffffdd00.l: [0x0010ba4e] /ROM Pointer/
0xffffdd36.l: [0x0012a6b4] /ROM Pointer/

0xffffea39: ?Used in algorythm?
0xffffe340.l: /ROM Pointer/ ?Drawing?
0xffffe344.l: @0x282c /Function Pointer/Drawing/
0xffffe364.l: @0x282c /Function Pointer/
0xffffe374: ?Data Table? *Responcible for the background.

Flow Chart:
0xf72: Draws waters surface? Handles animating tiles.
0xfa8: Handles animating life meter during pause.
0x0bbaba
0x0bafd4-0x0bb026: Where message screen updates.
0x0dc4: * Draws text in messages? 
0x1242: ?Algorythm?
0x158e: ?Decodes VDP Commands?
0x25f8: * Alot of mini decompression schemes.
0x2710: * rts: Stops the sinwave generator for message backgrounds.
0x888: * rts: Turns Water Surface Into Trampoline.
0x10aa: *Effects fish, effects left to right movement and more.

0x83b08: ?Scrolling?
0x85158: * Major compare block.
0x86068: /Loads Barriers, Objects and NPCs/
0x8c7ac: ? Horizonal Diagonal Movement?
0x8c7be: ? Vertical Diagonal Movement?
0x8d8c6: * Where selection screen loads.
0x8dcdc: * Major compare block.
0x8dec0: ?Loads Level?
0xe9d08: ?Has an interesting loop tied to memory 0xdd3c.
0xa7a90: * rts: Causes dolphins to partially stop moving.
0xbbe50: * Loads address 0x1e1e7c, may be important.
0xc9fa2: part of ec0fc, loads level decompressor.
0xe1bae-0xe2b10: *Looks interesting...Wierd jmp.
0x8eb20: removes barriers, objects and npcs.

0xe8baa: Draws the screen vertical and horizontal tiles. !Important!
0xe8eba - Draws horizontal tiles.
0xe916e - Likely draws vertical tiles.

0xe88d8: *Interesting function with a nop.
0xe9d5c: * Monster function that uses abcd op.
0xec222: ?
0xec362: Draws waters surface.
0xec4d4:
0xec4dc: /Level Decompression Algorythm 1/ Part of 0xe88d8.
0xec570: Part of the algorythm loads 0x8000.
         Likely dumps uncompressed data from 0x8000 to 0x0012.
0xebce8: /Tile Compression Algorythm/

0xe8eba / Something gets decompressed here. Another algorythm (3rd). !!!

0xe9470-0xe9452 - controls barriers
0x8eca2
0xe94b8
0x8eb20: Possible third algorythm. Not third algorythm.
0xe9452: part of third algorythm.

0x85d7a
0x11e4: loads palettes
0xe8fdc - uses 8000
0x965f0


Sonarmap
0xebe04:
0x32ca
0xec1a6:
0xe9574

Ecco:
2372
1e1d00
1c9fe0
8eb20
5f74
0xa7a90 - controls dolphins movements.
9cf73
1e05bc - dolphin animation related
2458

[!!!]2c000 - dolphin sprite bitmap

6c70|
0ce684???

1e0248
241c

a955e
23b4 - draws sprites?
10b85a - sprite nametable data
e8fdc - draws screen
96380
965f0 - removes all objects barriers
9d774 - controls fish
a7e0c - stops all dolphins mid screen
5f0c - pointers to dolphin gfx data resource data table
32ca - zeroing out aspects causes fish to not turn.
11cef6
299c - data that controls aspects of the camera.
2cc8 - data related to dolphin movement
a7b9e - may be related to movement
0xd1abe - password generator
000a35a6 - amoeba logic
0xa955e
0x83bd0 - camera related?

0xe8eba: Draws Tiles to 6000. Decompresses Metatiles. For right direction!
0xe9094: Draws Tiles to 6000. Decompresses Metatiles.
0xe9358: .. Decompresses tiles from ff0000 to ff6000

0x00: /Vector Table/
0x100 /Header/
0x200 /Entry Point/
|
-0x2fa
 |
 - 0x690
   |
   - 0x81a
   - 0x736 /Load Interrupt 6 Handler/
   - 0xebb70
   - 0x83700 /Main/
     |
     - 0x86ba6
       |
       - 0x9d8
       - 0xd230c
       - 0x85f5e
       - 0xb0bfc
       - 0x86cf8
         |
         - 0xab0 * Responcible for music at the title screen.
         - 0x9b5d8 /Dummy Function/
         - 0xeb978 * When removed causes the demo to freeze at the end. 
         - 0xebe0c
         - 0xebef8 * Non-vital function.
         - 0xc4bc8 * Possibly responcible for the title screen.
         - jump (0x86db0 + offset)
           |
           - 0x0e
             |
             - 0xbb643 * Possibly responcible for the Sega screen.
           - 0x18
             |
             - 0xbb643
           - 0x6c
             |
             - 0xc4bc8
         |
         - 0x86b6c
           |
           - 0x85f5e
           - 0xa0640
         |
         - 0x85f7a
           |
           - 0x96cca
             |
             - 0xf96
             - 0x9b5d8
             - 0x2728
           |
           - 0x8dcc6
             |
             - 0x8d83e * Possibly where tiles load.
               |
               0xec0fc

Focus: 0xec0fc

0xec0fc: /Drawing/VDP Commands/
|
- 0x282c:
  |
  - a0 = (0xe344) /Special Effects/
    |
    - 0xe82b0:
    * Darkens color palette during screen transitions. 
  
  - 0xe9c48
    |
    - 0x1a4e: @0xffffa53a /Decompresses VDP Commands/
    
  - 0x27f0
  - 0x27c2
  - a0

ROM Map


0x0010af8c: [0x0010afc6] /Data Structure/
0x0010af9a: [0x0010afda]
0x0010afa2: [0x0012e306]
0x0010afa6: [0x0010b85a]
0x0010afaa: [0x0012a6b4]
0x0010afba: [0x0010b940]

0x0010afc6: ?VFD Commands?
0x0010afda: ?VFD Commands?
0x0010b85a: *When zero'd out makes the fish in the first level invisible.*
0x0010b940: *Zeroing out first ~FFFF scrambles the tiles. 
0x0010b942: [0x00118326] ?Possible location of blocks? ?Block data is 4 bytes?
0x0010ba52: [0x001152b2] /Level 1 Structure Pointer/

0x0012e306: Possible tile data location. 

Level Data Structure:

"HOMEBAY 1", 0x000e, 0x001152b2

0x001152b2.b: 
*
*  Determines the direction player is facing.
*  00 = Right, 0a = Down, 0b = Down Left, 0c = Left.
*

0x001152b3.b Setting to 1 causes rocks to dance.
0x001152b3.b Effects background scrolling. 

0x001152b8.b: /Level Music Select/
0x001152b9.b: /Water Surface Position/
*
*  The waters surface position is determined by horizontal block units.
*  The waters surface only animates when player is near it.
*
*  0x00 raises the waters surface offscreen.
*  0xff lowers the waters surface offscreen.

0x001152be: *Effects waters surface palette.

0x001152c4-7:
*
*  Effects some background foreground and sprite palettes.
*  Selects palettes 0x00-0x03.

0x001162d2: /Level Name/
*
*  18 byte ascii string. X is the terminating character
*  usually placed at the 12th character.

0x1152ea-b: /Level Data Size/ * Measured in bytes.

0x10af8c.l: [0x0010afc6] * Possible location of color information.
0x10afda: ?Surface Sprite Data?
0x12a6b4: /Extended Block Data/
0x12e306: ?Extended? /Tile Data/

"CRYSTAL SPRINGS", 10, 0x00116b76
"CITY OF FOREVER", 22, 0x001696b8

Journal:

* DMA Address is divided by 2.

0x00095eaa: * Setting to 0x4e71 removes most of the barriers.
0x0010b940: * Setting to 0x00[2b]001183[36] scrambles the blocks.
0x0010b94a: * Setting to 0xffff01[4e] causes "Round One Fight!" glitch.
            * Setting to 0xffff01[0e] creates an invisible block at the bottom.
			
519c = possible loc of npc data objects homebay ram

relative to save state. 
2d24 = background gfx
329c = possible loc of object data
3558 **
level size 2bc
3733 = first dolphin loc (word data) (index)
|
set to 0818 creates something interesting.
shark data
[01][(18) seems to be actual object info][00][00][left-right width][00]
      | AF ] vortex queen
	  2e blue vortex
	  2f attacking stars
	  BF = swirling bubbles
	  BE = swirl from the tube
	  AB - time traveling metasphere
	  A7 secret message
	  A5 = level exit to deep ridge
	  a4 swirling bubble creature.
	  a1 gooey level effects
	  84 trellia appears
	  c8 metasphere
	  c9 falling metasphere
	  83 head of unused creature
	  ca flying dolphin
	  cd future vortex time travel
	  82 bizzare shifting rocks effect
	  d0 pulsar
	  d1 freezes game
	  12 attacking star
	  13 glyph
	  85 strange creature unknown - vortex queen
	  8a movable barrel (fill with air?)
	  78 auto scrolls level.
	  7a threatening glitch barrel
	  7c lightening
	  7d lightening used on queen level.
	  67 creature with cool long long tail.
	  68 same but different
	  69 creture head blue
	  6a swarm of sharks????
	  5d strange bg effect
	  5e attacking star worm.
	  4c deflecting glyph.
	  
[word:index][byte][byte][byte][byte:message] 

39a6 = another table...

SEA OF GREEN

byte[6]

365c - 01 18 06 42 03 01

00 - Nothing
01 - Nothing
02 - Nothing
03 - Nothing
04 - Nothing
05 - Nothing
06 - Nothing
07 - Star Explosion
08 - *
09 - Fish
0a - Scared Fish
0b - Small Fish
0c - Nothing
0d - Nothing
0e - Nothing
0f - Nothing
10 - Air Bubbles
11 - *
12 - Star Explosion that Attacks
13 - Key Glyph
14 - Barrier Glyph
15 - Nothing
16 - Nothing
17 - Star Explosion that Attacks
18 - Shark
19 - Dolphin
20 - Star Explosion
21 - Nothing
22 - Nothing
23 - Star Explosion
24 - Star Explosion Block
25 - Star Explosion
26 - *
27 - *
28 - Star Explosion that Falls.
29 - Nothing
2a - Star Explosion
2b - *
2c - *
2d - Nothing
2e - Vortex Drone
2f - Randomly Appearing Exploding Stars 
30 - Nothing
31 - *
32 - *
33 - Star Explosion
34 - *
35 = *
36 - Falling Star Explosion
37 - Star Explosion
38 - Pushing Force
39 - Dolphin Moving Back Forth
3a - *
3b - Causes Auto Scroll then Teleport
3c - *
3d - Removes Vertical Scrolling
3e - Nothing
3f - Dolphin Attackign Drone
40 - Glyph that Gives Invicibility
41 - Eruption of Bubbles
42 - Pteranadon (Replaced with Skyfin)
43 - Gltchy Tile
44 - Currents that pull toward a center
45 - Star Explosion that stays with you
46 - Star Explosion
47 - Exit
48 - Exit
49 - Exploding Stars that Attack and runs away
4a - Nothing
4b - *
4c - Elastic Gylph
4d - Part of Elestic Glyph Puzzle
4e - Unused Elasrtic Glyph that repels?
4f - Exploding Falling Star
50 - Nothing
51 - *
52 - *
53 - Jumping gush of bubbles
54 - Nothing
55 - Turtle
56 - Exploding Stars
57 - Nothing
58 - *
59 - Aggressive Attacking Stars
5a - Repelling Force
5b - Pacing Dolphin
5c - Save Point Glyph
5d - Causes Background to move with invisible creature
5e - Attacking Star worm
5f - Orca
60 - Jellyfish?
61 - Explosion
62 - *
63 - Bobbling head neck creature
64 - Dolphin
65 - Vortex Blue Head - Hunter Song?
66 - * Needs to be double checked away from surface
67 - *
68  - Blue Head from future
69 - *
6a - Dolphin
6b - Nothing
6c - Gush of bubbles exploding in X
6d - Tiny attacking bubble
6e - Causes Gravity Meter to Appear
6f - Stationary Dolphin
70 - Down pushing current
71 - Explosion
72 - Frteezes Game
73 - Nothing
74 - Exploding
75 - Nothing
76 - Attacking blue head
77 - Nothing
78 - causes auto scrolling
79 - Aggressive dolphin
7a - Invisible vortex, non aggressive (probably medusa)
7b - Frozen Dolphin
7c - Luightening
7d - Lightening from queen level
7e - Nothing
7f - *
80 - *
81 - *
82 - Glitches level causes level to behave like globe holder.

965f0 ------

95802 - no effect
95890 - no effect
9591e - no effect

966b0 - seems to be start

ffaa00 or a200 - could be sprite data
ffad80 - player sprrite data
ffcfb8 - start of pointer table (end actually)

96652 (a1) - no effect
966f2 (a1) - stops all objects from moving. they still animate (some)

959c8 - controls frame rate, causes splash bubbdles to remain on 
        surface and random bubbles to stay near surface.
		removes barriers and some objects.

967f2 - 

8f470 - controls splashes, flips fish
0xff5dd8?
0xff5d1c
0xa1bb4 
23b4 - sprite loader.
dc4 - removes all sprites except dolphin.
a520-24 counters word sized.
0xa5c0 - 0010af8c - palette data foreground or background?
0010afc6 - what  is this before palette data?
0xaf60 - 0010afda - palette data
0xa562 - 0010b85a - sprite object data, builds sprite? fish
12a6b4

[background scrambles depending on balue with random tiles.
10afc6 - byte - has something to do with palette
10afc7 - unknown
10afc8 - effects bg
10afc9 - nothing
10afca - effects bg
10afcb - effects bg
10afd2 - effects bg

4110

dc90 08e8b2

e2e4 - 00021c10 15354
e304 - 000e706c
e330 - 00086d3a
e33d - 000e6f58
dcd4 - 0010ba3e
! importanT AREA!
dcda - 00ff0000
e30a - 000e706c - vdp commands?

10ba4e - contains data that tells how the memory should be mapped with level data
1e0248 = dolphin?
ac3a = 01e0248
1e1c08S
1e0dfc

1e104e - scrambles all tiles
1e03f4

9571e - all objects gone.

a2000 has sprite nametable info
[long] [ypos][?][X:408][xpos]

md registers

80 - 8f = reg 1-15

90 - 9f = reg 16-31

93-94 = reg 19-20
95-77 = reg 21-22

23b4 - key subroutine for sprites.
a570 - 1294f6

8892c - movement locating....
88672 - effects scrolling.
864be

88f48 - no effect
8f470 - effects splash animations 
96a0c
965f0 - removes barriers and objects
8644c 
85f7a - crashes game, causes game to reset
dff28 - nothing
85fde - nothing.
8eba2
8eb20 - removes barriers and objects
965f0 - same as above
8ebbe 
e9452 - crashes object or scrolling
1076
86ad0
862b8
86a26 - nothing
a7a90 - stops npc dolphin movements.
20e0 - nothing
1e2c - effects bg
23b4 - draws sprites?
e92aa
aa54 - direction
84500 effects direction....

0xffffad62 
0xffffa9d4 - ????

2b9c
______
84110
84256
84408
84458
84074

MOVEMENT ALGO
84c32
|
- 84c4a
 |-----------------needs further study
 -84074 - effects left to right transition movement
 -84408 - effects falling or flip
   |
   -83fbe - prevents falling
   |
   -83f72 - nothing
   |
   -8401e - effects camera (or movement or both)
   
 -84256 - effects jumping upward
   |
   _ 10aa - prevents dolphins from jumping or diving they bobble
   |
   - 83fbe prevents falling
   |
   - 8401e
   
 -84458 effects return to sea splash, water elsticity
 -84110 - custom jsr in a1 (from 2b9c)
  |------------------
  - 10aa  -effects speed up C button
  |
  - 8418c custom jump instruction
    |
	8419e
	|
	- 841e6 - freezes game  
	  |
	  8c7be - effects turn transitions.
	      |
		  (2cce) sinewave table
		  
	  |
	  8c7ac - effects camera movement
	  |
	  8401e - effects physics (or camera)
	   |
	   1076 - no effect
	  
	  a7b38 posible ai code block
	  
table begins at 2bc9 - !!!!	
	
  2bc7 - 41 bytes  effects down and down right
  2c08 - 41 bytes - effects down movement and down left
  2ce9 - down left
  2c49 - 41 bytes - effects up movement and up left
  2cc8 - 41 bytes - effects right movement....right down
  2d09 - 41 bytes - effects left and left down movement
  
  2d4a - 41 bytes - effects left to right movement (left up)
  2d88 - 41 bytes effects left to right transition partially? (right up)
  
  2b9c - eccos movement algos
  
  201 bytes?
  
  2bc8 table
  
  2c08 - down
  2c28 - (20) down right
  2c88 - 2c08 + 0x80 (2c88) - up
  2ca8 - up right
  
  2cc8 - right
  2ce8 - (20) down right
  
  2d48 - 2cc8 + 0x80 (2d48) left
  2d68 - (20) up left
  2dc8 - end

2b08 - down right

2c08 - down
+20 - down left
+60 - up left
+80 - up
+20 up right


+40 2cc8 - right

+20 - down right
+60 - down left
+80 - left
++20 - up left
++60 - up right


  
  down - down right
  down - down left
  left- left up
  left - left down
  right - right down
  left - left down
  up - up left
  up - up right
  left up
  right up 


2bc8 - 
none - faces right moves up-right (press right) used 88 as val
down right - no movement when zeroed.
down
down left
none (0) - faces left moves left-up (press left)
up left
up
up right

2cc8 - 
right
down right (moves down only when zeroed)
none (0) - faces down moves right-down (press down)
down left
left
up left
none (0) - faces up moves up-left (press up)
up right - moves up only

2bc8 table 1
2cc8 table 2

swappable functions

84110 - basic ecco movements....stops ecco from moving.
84256 - effects waters elasticity-bounyancy
84408 - effects ecco's pinwheel flip
84458 - triggers on water reentry
84074 - triggers on water reentry
843b8 - jump out of water physics. 
8400a - no effect
8400c - unknown