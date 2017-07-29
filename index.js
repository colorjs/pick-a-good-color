const chroma = require('chroma-js')
const MIN_CONTRAST = 4.5 // https://www.w3.org/TR/WCAG20-TECHS/G18.html

function makeLegible (color) {
  color = chroma(color)
  const contrast = chroma.contrast('#fff', color)
  if (contrast >= MIN_CONTRAST) {
    return color
  } else {
    return makeLegible(color.darken(0.25))
  }
}

function getMostSaturatedColor (palette) {
  return palette
    .map(color => chroma(color))
    .sort((a, b) => b.get('hsl.s') - a.get('hsl.s'))[0]
}

function getBoldest (palette, fallback) {
  // sort colors by saturation
  const colors = palette
    .map(color => chroma(color))
    .sort((a, b) => b.get('hsl.s') - a.get('hsl.s'))

  const suitableColors = colors
    .filter(color => chroma.contrast('#fff', color) >= MIN_CONTRAST)
    .filter(color => color.get('hsl.s') > 0.5)

  if (suitableColors.length) return suitableColors[0]

  if (fallback) {
    return chroma(fallback)
  } else {
    return makeLegible(colors[0])
  }
}

module.exports = {
  getBoldest: getBoldest,
  getMostSaturatedColor: getMostSaturatedColor,
  makeLegible: makeLegible
}
