require('chai').should()
const pick = require('..')
const {describe, it} = require('mocha')
const Color = require('color2')

describe('pickAGoodColor', () => {
  it('is a function', () => {
    pick.should.be.a('function')
  })

  it('picks the most saturated color that meets contrast requirements', () => {
    const colors = [
      '#333',
      '#FF0000',
      '#600',
      '#555',
      '#777'
    ]
    const color = pick(colors)
    color.should.equal('#600')
    Color(color).contrast(Color('white')).should.be.above(4.5)
  })
})
