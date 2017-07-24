require('chai').should()
const utils = require('..')
const {getBoldest, makeLegible} = utils
const chroma = require('chroma-js')
const {describe, it} = require('mocha')
const fixtures = require('nice-color-palettes')

describe('colorPaletteUtils', () => {
  it('is an object with functions', () => {
    utils.should.be.an('object')
    utils.makeLegible.should.be.a('function')
    utils.getBoldest.should.be.a('function')
  })

  describe('makeLegible', () => {
    it('returns color if it has enough contrast', () => {
      makeLegible('#000').hex().should.equal('#000000')
    })

    it('adjusts color if it does not have enough contrast', () => {
      const color = makeLegible('#FFF')
      chroma.contrast('#FFF', color).should.be.above(4.4)
    })
  })

  describe('getBoldest', () => {
    it('picks the most saturated color that meets contrast requirements', () => {
      const colors = [
        '#333',
        '#FF0000',
        '#660000',
        '#555',
        '#777'
      ]
      chroma.contrast('#FFF', '#FF0000').should.be.above(3).and.below(4)
      chroma.contrast('#FFF', '#660000').should.be.above(4.5)
      getBoldest(colors).hex().should.equal('#660000')
    })

    it('creats a suitable color if none exist', () => {
      const colors = [
        '#333',
        '#555',
        '#FF0000',
        '#777'
      ]
      const boldest = getBoldest(colors)
      boldest.get('rgb.r').should.be.above(200)
      boldest.get('rgb.g').should.be.below(10)
      boldest.get('rgb.b').should.be.below(10)
    })

    it('works with a wide variety of palettes', () => {
      fixtures.length.should.be.above(20)
      fixtures.forEach(colors => {
        getBoldest(colors).should.be.an('object')
      })
    })

    it('respects fallback value if needed', () => {
      // TODO
    })
  })
})
