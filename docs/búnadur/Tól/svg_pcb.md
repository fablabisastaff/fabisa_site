# SVG-PCB

Verkfæri til að hann prentplötur í SVG kóða sem má śiðan breyta og aðlaga.

[Hlekkur á SVG-PCB](https://leomcelroy.com/svg-pcb-website/#/home){:rel="nofollow"}


## leiðbeiningar á ensku

This open-source in-browser editor lets you design Printed Circuit Boards (PCB) from a code description. The result is a svg file suitable for most PCB prototyping solutions.

Describing the board as code clearly shows you the relation between components and wires. It also lets you generate more complex circuits based on a set of rules (e.g. for creating an array or enable optional components).

The left pane is a full js editor and the right pane is the generated svg:

![svg pcb](https://leomcelroy.com/svg-pcb-website/assets/home_screenshot.pnghttps://leomcelroy.com/svg-pcb-website/assets/home_screenshot.png)

The svg file can be used as a mask for an etching process. Alternatively, you could mill the board by first converting the svg to gcode instructions for a CNC milling machine. This is easily done with mods:

![mods](https://leomcelroy.com/svg-pcb-website/assets/mods.png)

This example board was milled in about 15 minutes and soldered just as fast:

![pcb board](https://leomcelroy.com/svg-pcb-website/assets/board.jpg)

### Um verkfærið á ensku

This project was made by Leo McElroy and Quentin Bolsee. We met in Neil Gershenfeld's Rapid-Prototyping of Rapid-Prototyping Machines Seminar.

The project was inspired by the Python FRep PCBs by Neil. Originally we made an FRep PCB editor then we made another one, then we made this.