# color-palette-utils 

functions for working with collections of colors

## Installation

```sh
npm install color-palette-utils --save
```

## Usage

```js
const utils = require('color-palette-utils')
```

## API

### `utils.getGradient(colors)`

...

### `utils.getBoldest(colors[, fallback])`

Takes an array of colors and returns the color with the highest saturation that also meets the minimum 
contrast requirement of **4.5:1**, as specified by the [W3C Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20-TECHS/G18.html). 
If none of the provided colors meet this criteria, the `fallback` color is used. If no `fallback` is specified, 
then the most saturated color is selected and darkened to meet the minimum contrast requirement.

- `colors` Array - can be hex strings like `#FF0000` or any other input supported by [chroma-js].
- `fallback` String - hex color to use if none of the given colors have enough contrast. If
   unspecified, the fallback color is generated automatically.

Returns a [chroma-js] instance.

## Tests

```sh
npm install
npm test
```

## Dependencies

- [chroma-js](https://github.com/gka/chroma.js): JavaScript library for color conversions

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [nice-color-palettes](https://github.com/Jam3/nice-color-palettes): nice colour palettes as JSON
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT

[chroma-js]: https://github.com/gka/chroma.js