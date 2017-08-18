# pick-a-good-color 

> Choose the boldest and most accessible color for a given background.

[![electron app icon colors](https://user-images.githubusercontent.com/2289/29397734-370d9d00-82d5-11e7-8689-d32e40256d67.png)](https://user-images.githubusercontent.com/2289/29397854-e127ed86-82d5-11e7-9837-e3016c03ce8e.png)

## Installation

```sh
npm install pick-a-good-color --save
```

## Usage

Given an array of colors, this function will attempt to find the most saturated 
color that meets the 
[recommended WCAG contrast ratio](https://www.w3.org/TR/WCAG/#visual-audio-contrast)
of 4.5:1. If none of the given colors meet the criteria, then the most saturated 
color  in the array will be adjusted to meet the contrast requirements using the 
[make-color-accessible](http://ghub.io/make-color-accessible) module.

By default, this module will pick a color that will work on a white background:

```js
const pick = require('pick-a-good-color')
const colors = ['#DB1AC2', '#C70C4D', '#6B0964', '#5D2BD6', '#088C00']
const goodColor = pick(colors)
// => #C70C4D
```

If you need a color that will work on a black background, set the 
`background` option:

```js
const goodColor = pick(colors, {background: 'black'})
```

For large text, the WCAG 
[recommends](https://www.w3.org/TR/WCAG/#visual-audio-contrast)
a lower minimum ratio of 3:1.
To change the minimum required contrast, set the `contrast` option:

```js
const goodColor = pick(colors, {contrast: 3})
```

## API

### `pickAGoodColor(colors[, options])`

- `colors` - An array of hex strings, html color names like `black` or `white`, or any other input accepted by the [color2](https://github.com/scrapjs/color#api) module. (required)
- `options` - An object. Optional.
  - `contrast` - A number representing the minimum required contrast ratio between `options.background` and a color in the `colors` argument. Defaults to the [WCAG recommendation](https://www.w3.org/TR/WCAG20-TECHS/G18.html) of `4.5`. Can be any number between 1 and 21.
  - `background` - A hex string, html color name like `black` or `white`, or any other input accepted by the [color2](https://github.com/scrapjs/color#api) module. Defaults to `white`.

## Tests

```sh
npm install
npm test
```

## See Also

- [leaverou.github.io/contrast-ratio](http://leaverou.github.io/contrast-ratio/) - A tool to calculate the contrast ratio between any two valid CSS colors. 

## Dependencies

- [color2](https://github.com/dfcreative/color): Stateful implementation of color
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [make-color-accessible](https://github.com/zeke/make-color-accessible): produce colors that meet web content accessibility guidelines

## Dev Dependencies

- [budo](https://github.com/mattdesl/budo): a browserify server for rapid prototyping
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [electron-apps](https://github.com/electron/electron-apps): A collection of apps built on Electron
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™
- [yo-yo](https://github.com/maxogden/yo-yo): A tiny library for building modular UI components using DOM diffing and ES6 tagged template literals


## License

MIT
