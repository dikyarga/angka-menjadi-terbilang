const { compose, map, reduce, reverse, splitEvery, trim } = require('ramda')

const satuan = xs => {
  switch (xs) {
    case '0': return 'nol'
    case '1': return 'satu'
    case '2': return 'dua'
    case '3': return 'tiga'
    case '4': return 'empat'
    case '5': return 'lima'
    case '6': return 'enam'
    case '7': return 'tujuh'
    case '8': return 'delapan'
    case '9': return 'sembilan'
  }
}

const puluhan = xs => {
  const headX = xs[0]
  const lastX = xs[1]

  if (xs === '10') return 'sepuluh'
  else if (xs === '11') return 'sebelas'
  else if (headX === '1') return `${satuan(lastX)} belas`
  else if (headX === '0') return satuan(headX)
  else if (lastX === '0') return `${satuan(headX)} puluh`

  return `${satuan(headX)} puluh ${satuan(lastX)}`
}

const ratusan = xs => {
  const headX = xs[0]
  const middleX = xs[1]
  const lastX = xs[2]
  const tailX = middleX + lastX

  if (xs === '100') return 'seratus'
  else if (tailX === '00') return `${satuan(headX)} ratus`
  else if (headX === '0' || headX === '1') return `seratus ${puluhan(tailX)}`

  return `${satuan(headX)} ratus ${puluhan(tailX)}`
}

const pisahAngka = compose(reverse, map(reverse), splitEvery(3), reverse)

const angka = n => {
  const a = parseInt(n)

  if (n === '100') return ''
  else if (a < 10) return satuan(n)
  else if (a < 100) return puluhan(n)
  else if (a < 1000) return ratusan(n)
}

const nolTiga = xs => {
  const rxs = reverse(xs)

  return reverse(rxs.map((v, i) => {
    const j = i + 1
    const notEmpty = v.length > 0

    if (!notEmpty) return ''

    if (j === 1) return v
    else if (j === 2) {
      if (v === 'satu') return 'seribu'
      return `${v} ribu`
    } else if (j === 3) return `${v} juta`
    else if (j === 4) return `${v} milyar`
    else if (j === 5) return `${v} triliun`
    else if (j === 6) return `${v} kuadriliun`
    else if (j === 7) return `${v} kuantiliun`
    else if (j === 8) return `${v} sekstiliun`
    else if (j === 9) return `${v} septiliun`
    else if (j === 10) return `${v} oktiliun`
    else if (j === 11) return `${v} noniliun`
    else if (j === 12) return `${v} desiliun`
  }))
}

const ubahAngkaKeBahasa = compose(
  trim,
  reduce((acc, x) => acc + ' ' + x, ''), // gabung
  nolTiga,
  map(angka),
  pisahAngka,
  x => x.toString()
)

module.exports = ubahAngkaKeBahasa
