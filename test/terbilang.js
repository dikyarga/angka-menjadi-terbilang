const { expect } = require('chai')
const terbilang = require('../index.js')

describe('Terbilang:satuan', () => {
  it('returns "nol" when given 0', () => {
    expect(terbilang(0)).to.eql('nol')
  })
  it('returns "empat" if paramater got number 4', () => {
    expect(terbilang(4)).to.eql('empat')
  })
  it('returns "sembilan" when given 09', () => {
    expect(terbilang(09)).to.eql('sembilan')
  })
})

describe('Terbilang:belasan', () => {
  it('returns "sepuluh" when given 10', () => {
    expect(terbilang(10)).to.eql('sepuluh')
  })
  it('returns "sebelas" when given 11', () => {
    expect(terbilang(11)).to.eql('sebelas')
  })
  it('returns "dua belas" when given 12', () => {
    expect(terbilang(12)).to.eql('dua belas')
  })
})

describe('Terbilang:puluhan', () => {
  it('returns "dua puluh" when given 20', () => {
    expect(terbilang(20)).to.eql('dua puluh')
  })
  it('returns "dua puluh satu" when given 21', () => {
    expect(terbilang(21)).to.eql('dua puluh satu')
  })
})

describe('Terbilang:ratusan', () => {
  it('returns "seratus" when given 100', () => {
    expect(terbilang(100)).to.eql('seratus')
  })
  it('returns "seratus satu" when given 101', () => {
    expect(terbilang(101)).to.eql('seratus satu')
  })
  it('returns "seratus sepuluh" when given 110', () => {
    expect(terbilang(110)).to.eql('seratus sepuluh')
  })
})

describe('Terbilang:ribuan', () => {
  it('returns "seribu" when given 1000', () => {
    expect(terbilang(1000)).to.eql('seribu')
  })
  it('returns "seribu satu" when given 1001', () => {
    expect(terbilang(1001)).to.eql('seribu satu')
  })
  it('returns "seribu seratus" when given 1100', () => {
    expect(terbilang(1100)).to.eql('seribu seratus')
  })
})

describe('Terbilang: >jutaan', () => {
  it('returns "satu juta" when given 1000000', () => {
    expect(terbilang(1000000)).to.eql('satu juta')
  })
  it('returns "satu juta satu" when given 1000001', () => {
    expect(terbilang(1000001)).to.eql('satu juta satu')
  })
  it('returns "satu milyar" when given 1000000000', () => {
    expect(terbilang(1000000000)).to.eql('satu milyar')
  })
  it('returns "satu milyar satu" when given 1000000001', () => {
    expect(terbilang(1000000001)).to.eql('satu milyar satu')
  })
})

describe('Terbilang:titik', () => {
  it('returns "seribu seratus" when given \'1.100\'', () => {
    expect(terbilang('1.100')).to.eql('seribu seratus')
  })
  it('returns "satu milyar satu" when given \'1.000.000.001\'', () => {
    expect(terbilang('1.000.000.001')).to.eql('satu milyar satu')
  })
})
