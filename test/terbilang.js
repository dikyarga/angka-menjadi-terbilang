var should = require('chai').should()

let terbilang = require('../index.js')


describe('Terbilang', () => {
  it('it should be return "empat" if paramater got number 4', () => {
    terbilang(4).should.be.equal('empat')
  })
  it('it should be return an string if function got any number', () => {
    terbilang(15).should.be.a('string')
  })
  it('it should be return "dua ratus tiga puluh emapat" if the number is 234', () => {
    terbilang(234).should.be.equal('dua ratus tiga  puluh empat')
  })
})
