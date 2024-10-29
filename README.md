# NeatCSS Framework

NeatCSS is a lightweight, responsive CSS framework built to simplify styling by allowing CSS properties to be applied directly via HTML attributes. Designed for rapid development, NeatCSS is ideal for projects needing efficient, responsive design control without extensive CSS files.

## Features

- **Attribute-Based Styling**: Use shorthand attributes to apply CSS properties directly on elements.
- **Responsive Design**: Supports breakpoints for various screen sizes, from mobile (320px) to large desktop screens (1440px).
- **Dynamic Responsiveness**: Automatically adapts styles based on the current viewport width.
- **Broad Property Coverage**: Includes support for commonly-used CSS properties (e.g., padding, margin, background, animation, display, flex, grid, font properties).

## Getting Started

### Installation

You can install NeatCSS via npm:

```bash
npm install neatcss
```

Alternatively, include the JavaScript file directly in your project:

```html
<script src="https://test-neatcss.vercel.app/index.js"></script>
```

### Basic Usage Example

With NeatCSS, you can style elements by adding attributes instead of traditional CSS selectors:

```html
<!-- Button with padding, margin, and background color -->
<button p="15px" m="10px" bgc="#3498db" cl="#ffffff">Click Me</button>

<!-- Div with responsive margin and padding -->
<div mx-sm="20px" mx-md="30px" mx-lg="40px" px="10px" bgc="#e74c3c">
    Responsive Div
</div>
```

| Attribute | Expanded Property          | Example Usage                               |
|-----------|----------------------------|---------------------------------------------|
| an        | animation-name             | `<div an="fade"></div>`                     |
| and       | animation-duration         | `<div and="2s"></div>`                      |
| ant       | animation-timing-function  | `<div ant="ease-in-out"></div>`             |
| any       | animation-delay            | `<div any="1s"></div>`                      |
| ani       | animation-iteration-count  | `<div ani="infinite"></div>`                |
| anr       | animation-direction        | `<div anr="reverse"></div>`                 |
| anp       | animation-play-state       | `<div anp="paused"></div>`                  |
| bg        | background                 | `<div bg="url('bg.jpg') no-repeat"></div>`  |
| bga       | background-attachment      | `<div bga="fixed"></div>`                   |
| bgc       | background-color           | `<div bgc="#f0f0f0"></div>`                 |
| bgi       | background-image           | `<div bgi="url('image.png')"></div>`        |
| bgp       | background-position        | `<div bgp="center center"></div>`           |
| bgr       | background-repeat          | `<div bgr="no-repeat"></div>`               |
| bgl       | background-clip            | `<div bgl="padding-box"></div>`             |
| bgo       | background-origin          | `<div bgo="content-box"></div>`             |
| bgb       | background-blend-mode      | `<div bgb="multiply"></div>`                |
| bgs       | background-size            | `<div bgs="cover"></div>`                   |
| bd        | border                     | `<div bd="1px solid #000"></div>`           |
| bdc       | border-collapse            | `<table bdc="collapse"></table>`            |
| bdt       | border-top                 | `<div bdt="2px solid red"></div>`           |
| bdl       | border-left                | `<div bdl="2px solid green"></div>`         |
| bdr       | border-right               | `<div bdr="2px solid blue"></div>`          |
| bdb       | border-bottom              | `<div bdb="2px solid yellow"></div>`        |
| otl       | outline                    | `<button otl="none"></button>`              |
| bxsh      | box-shadow                 | `<div bxsh="2px 2px 5px rgba(0,0,0,0.3)"></div>` |
| txsh      | text-shadow                | `<p txsh="1px 1px 2px gray"></p>`          |
| ovf       | overflow                   | `<div ovf="hidden"></div>`                  |
| opc       | opacity                    | `<div opc="0.5"></div>`                     |
| h         | height                     | `<div h="100px"></div>`                     |
| mxh       | max-height                 | `<div mxh="300px"></div>`                   |
| mnh       | min-height                 | `<div mnh="200px"></div>`                   |
| w         | width                      | `<div w="100%"></div>`                      |
| mxw       | max-width                  | `<div mxw="800px"></div>`                   |
| mnw       | min-width                  | `<div mnw="400px"></div>`                   |
| ftf       | font-family                | `<p ftf="Arial, sans-serif"></p>`          |
| fts       | font-size                  | `<p fts="16px"></p>`                        |
| ftw       | font-weight                | `<p ftw="bold"></p>`                        |
| fty       | font-style                 | `<p fty="italic"></p>`                      |
| ls        | list-style                  | `<ul ls="none"></ul>`                         |
| m         | margin                      | `<div m="10px"></div>`                        |
| mt        | margin-top                  | `<div mt="20px"></div>`                       |
| mr        | margin-right                | `<div mr="15px"></div>`                       |
| ml        | margin-left                 | `<div ml="15px"></div>`                       |
| mb        | margin-bottom               | `<div mb="25px"></div>`                       |
| mx        | margin-left, margin-right   | `<div mx="10px"></div>`                       |
| my        | margin-top, margin-bottom   | `<div my="5px"></div>`                        |
| p         | padding                     | `<div p="20px"></div>`                        |
| pt        | padding-top                 | `<div pt="10px"></div>`                       |
| pr        | padding-right               | `<div pr="15px"></div>`                       |
| pl        | padding-left                | `<div pl="15px"></div>`                       |
| pb        | padding-bottom              | `<div pb="20px"></div>`                       |
| px        | padding-left, padding-right | `<div px="12px"></div>`                       |
| py        | padding-top, padding-bottom | `<div py="8px"></div>`                        |
| pos       | position                    | `<div pos="absolute"></div>`                  |
| z         | z-index                     | `<div z="10"></div>`                          |
| d         | display                     | `<div d="flex"></div>`                        |
| bxz       | box-sizing                  | `<div bxz="border-box"></div>`                |
| vis       | visibility                  | `<div vis="hidden"></div>`                    |
| ali       | align-items                 | `<div ali="center"></div>`                    |
| als       | align-self                  | `<div als="stretch"></div>`                   |
| alc       | align-content               | `<div alc="space-between"></div>`             |
| jsi       | justify-items               | `<div jsi="center"></div>`                    |
| jss       | justify-self                | `<div jss="end"></div>`                       |
| jsc       | justify-content             | `<div jsc="space-around"></div>`              |
| acc       | accent-color                | `<button acc="#ff5722"></button>`             |
| app       | appearance                  | `<input app="none"></input>`                  |
| asp       | aspect-ratio                | `<div asp="16/9"></div>`                      |
| bdf       | backdrop-filter             | `<div bdf="blur(5px)"></div>`                 |
| bt        | bottom                      | `<div bt="20px"></div>`                       |
| crt       | caret-color                 | `<input crt="red"></input>`                   |
| clp       | clip-path                   | `<div clp="circle(50%)"></div>`               |
| cl        | color                       | `<p cl="#333"></p>`                           |
| colc      | column-count                | `<div colc="3"></div>`                        |
| colw      | column-width                | `<div colw="150px"></div>`                    |
| colf      | column-fill                 | `<div colf="balance"></div>`                  |
| colg      | column-gap                  | `<div colg="10px"></div>`                     |
| colr      | column-rule                 | `<div colr="1px solid black"></div>`          |
| colp      | column-span                 | `<div colp="all"></div>`                      |
| flt       | filter                      | `<div flt="blur(3px)"></div>`                 |
| flx       | flex                        | `<div flx="1"></div>`                         |
| flxd      | flex-direction              | `<div flxd="row"></div>`                      |
| flxw      | flex-wrap                   | `<div flxw="wrap"></div>`                     |
| ga        | grid-area                   | `<div ga="header"></div>`                     |
| gac       | grid-auto-columns           | `<div gac="minmax(100px, 1fr)"></div>`       |
| gaf       | grid-auto-flow              | `<div gaf="row dense"></div>`                 |
| gar       | grid-auto-rows              | `<div gar="minmax(50px, auto)"></div>`       |
| gc        | grid-column                 | `<div gc="1 / 3"></div>`                      |
| gr        | grid-row                    | `<div gr="2 / span 3"></div>`                 |
| fl        | float                       | `<div fl="left"></div>`                       |
| gta       | grid-template-areas         | `<div gta="'header header' 'sidebar main'"></div>` |
| gtc       | grid-template-columns       | `<div gtc="1fr 2fr"></div>`                   |
| gtr       | grid-template-rows          | `<div gtr="auto 1fr"></div>`                  |
| ins       | inset                       | `<div ins="10px 20px"></div>`                 |
| plc       | place-content               | `<div plc="center"></div>`                    |
| pli       | place-items                 | `<div pli="center"></div>`                    |
| pls       | place-self                  | `<div pls="start"></div>`                     |
| rsz       | resize                      | `<textarea rsz="both"></textarea>`           |
| rot       | rotate                      | `<div rot="45deg"></div>`                     |
| g         | gap                         | `<div g="10px"></div>`                        |
| scl       | scale                       | `<div scl="1.5"></div>`                       |
| txa       | text-align                  | `<p txa="center"></p>`                        |
| txw       | text-wrap                   | `<p txw="balance"></p>`                       |
| txt       | text-transform              | `<p txt="uppercase"></p>`                     |
| txd       | text-decoration             | `<p txd="underline"></p>`                     |
| txs       | text-decoration-skip-ink    | `<p txs="auto"></p>`                          |
| txi       | text-indent                 | `<p txi="2em"></p>`                           |
| tf        | transform                      | `<div tf="rotate(45deg) scale(1.2)"></div>`    |
| tfs       | transform-style                | `<div tfs="preserve-3d"></div>`                |
| tfo       | transform-origin               | `<div tfo="center top"></div>`                 |
| ts        | transition                     | `<div ts="all 0.3s ease"></div>`               |
| tsd       | transition-delay               | `<div tsd="0.5s"></div>`                       |
| tsu       | transition-duration            | `<div tsu="0.3s"></div>`                       |
| tsp       | transition-property            | `<div tsp="opacity"></div>`                    |
| tst       | transition-timing-function     | `<div tst="ease-in-out"></div>`                |
| tl        | translate                      | `<div tl="50px, -10px"></div>`                 |
| us        | user-select                    | `<p us="none"></p>`                            |
| va        | vertical-align                 | `<img va="middle"></img>`                      |
| whs       | white-space                    | `<p whs="nowrap"></p>`                         |
| wb        | word-break                     | `<p wb="break-all"></p>`                       |
| ws        | word-spacing                   | `<p ws="2px"></p>`                             |
| tp        | top                            | `<div tp="20px"></div>`                        |
| lt        | left                           | `<div lt="10px"></div>`                        |
| rt        | right                          | `<div rt="5px"></div>`                         |
| lh        | line-height                    | `<p lh="1.5"></p>`                             |
| lts       | letter-spacing                 | `<p lts="0.05em"></p>`                         |
| cur       | cursor                         | `<div cur="pointer"></div>`                    |
| or        | order                          | `<div or="2"></div>`                           |
