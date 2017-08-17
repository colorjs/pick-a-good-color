const yo = require('yo-yo')
const path = require('path')
const pick = require('.')

const results = require('electron-apps')
  // .slice(0,150)
  .map(app => {
    console.clear()
    console.log(app)
    const {iconColors, slug, icon128} = app
    return {
      colors: iconColors,
      icon: path.join(__dirname, `node_modules/electron-apps/apps/${slug}/${icon128}`),
      name: app.name,
      goodColorOnBlack: pick(iconColors, {background: 'black'}),
      goodColorOnWhite: pick(iconColors, {background: 'white'})
    }
  })

function list (results) {
  return yo`<ul class="palettes">
    ${results.map(function (result) {
      const {colors, icon, goodColorOnBlack, goodColorOnWhite, name} = result
      return yo`<li>
        
        <ul class="swatches">
          ${colors.map(function (color) {
            return yo`<li style="background:${color}">${color}</li>`
          })}
          <li class="picked" style="background:${goodColorOnBlack};color:black;">${goodColorOnBlack}</li>
          <li class="picked" style="background:${goodColorOnWhite}">${goodColorOnWhite}</li>
          <li class="icon"><img src="${icon}">${name}</li>
        </ul>
      </li>`
    })}
  </ul>`
}

function key () {
  return yo`<ul class="palettes heading">
    <li>
      <ul class="swatches">
        <li>Palette</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

        <li>On Black</li>
        <li></li>
        <li>On White</li>
        <li>Icon</li>
      </ul>
    </li>
  </ul>`
}

document.body.appendChild(key())
document.body.appendChild(list(results))
