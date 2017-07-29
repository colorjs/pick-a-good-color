#!/usr/bin/env node

const {getBoldest, getMostSaturatedColor} = require('..')
const pretty = require('pretty')
const palettes = require('nice-color-palettes').map(colors => {
  return {
    colors: colors,
    boldestColor: getBoldest(colors),
    mostSaturated: getMostSaturatedColor(colors)
  }
})

const template = require('handlebars').compile(`
<link rel="stylesheet" href="styles.css">
<h1>color-palette-utils demo</h1>

{{#each palettes}}
  <section>
    <ul class="swatches">
      {{#each colors}}
        <li class="swatch" style="border-left: 60px solid {{this}}"></li>
      {{/each}}
      <li class="swatch" style="border-left: 60px solid {{mostSaturated}}">most saturated</li>
      <li class="swatch" style="border-left: 60px solid {{boldestColor}}">boldest</li>
    </ul>
  </section>
{{/each}}
`)

const context = {
  palettes: palettes
}
process.stdout.write(pretty(template(context)))
