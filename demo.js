const yo = require('yo-yo')
const randomColor = require('random-hex-color')
const pick = require('.')

// generate 100 color palettes
const results = Array
  .apply(null, Array(100))
  .map(i => {
    // generate a palette of random colors
    const colors = Array
      .apply(null, Array(5))
      .map(i => randomColor().toLocaleUpperCase())

    return {
      colors: colors,
      goodColorOnBlack: pick(colors, {background: 'black'}),
      goodColorOnWhite: pick(colors, {background: 'white'})
    }
  })

function list (results) {
  return yo`<ul class="palettes">
    ${results.map(function (result) {
      const {colors, goodColorOnBlack, goodColorOnWhite} = result
      return yo`<li>
        <ul class="swatches">
          ${colors.map(function (color) {
            return yo`<li style="background:${color}">${color}</li>`
          })}
          <li class="picked" style="background:${goodColorOnBlack};color:black;">BLACK</li>
          <li class="picked" style="background:${goodColorOnWhite}">WHITE</li>
        </ul>
      </li>`
    })}
  </ul>`
}

document.body.appendChild(list(results))
