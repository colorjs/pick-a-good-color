const yo = require('yo-yo')
const path = require('path')
const pick = require('.')

const palettes = require('electron-apps')
  .slice(26)
  .map(app => {
    const {iconColors, slug, icon128} = app
    return {
      colors: iconColors,
      icon: path.join(__dirname, `node_modules/electron-apps/apps/${slug}/${icon128}`),
      name: app.name,
      goodColorOnBlack: pick(iconColors, {background: 'black'}),
      goodColorOnWhite: pick(iconColors, {background: 'white'})
    }
  })

function render (palettes) {
  return yo`<content>

    <ul class="palettes heading">
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
          <li></li>
          <li>Icon</li>
        </ul>
      </li>
    </ul>

    <ul class="palettes">
      ${palettes.map(renderPalette)}
    </ul>
  </content>`
}

function renderPalette (palette) {
  const {colors, icon, goodColorOnBlack, goodColorOnWhite, name} = palette
  return yo`<li>
    <ul class="swatches">
      ${colors.map(color => {
        return yo`<li style="background:${color}">${color}</li>`
      })}
      <li class="picked" style="background:${goodColorOnBlack};color:black;">${goodColorOnBlack}</li>
      <li class="picked" style="background:${goodColorOnWhite}">${goodColorOnWhite}</li>
      <li class="icon"><img src="${icon}">${name}</li>
    </ul>
  </li>`
}

document.body.appendChild(render(palettes))
