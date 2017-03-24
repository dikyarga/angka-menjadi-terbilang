'use strict';

var _require = require('ramda'),
    compose = _require.compose,
    map = _require.map,
    reduce = _require.reduce,
    reverse = _require.reverse,
    splitEvery = _require.splitEvery,
    trim = _require.trim,
    tap = _require.tap;

var satuan = function satuan(xs) {
  switch (xs) {
    case '0':
      return 'nol';
    case '1':
      return 'satu';
    case '2':
      return 'dua';
    case '3':
      return 'tiga';
    case '4':
      return 'empat';
    case '5':
      return 'lima';
    case '6':
      return 'enam';
    case '7':
      return 'tujuh';
    case '8':
      return 'delapan';
    case '9':
      return 'sembilan';
  }
};

var puluhan = function puluhan(xs) {
  var headX = xs[0];
  var lastX = xs[1];

  if (xs === '10') return 'sepuluh';else if (xs === '11') return 'sebelas';else if (headX === '1') return satuan(lastX) + ' belas';else if (headX === '0') return satuan(headX);else if (lastX === '0') return satuan(headX) + ' puluh';

  return satuan(headX) + ' puluh ' + satuan(lastX);
};

var ratusan = function ratusan(xs) {
  var headX = xs[0];
  var middleX = xs[1];
  var lastX = xs[2];
  var tailX = middleX + lastX;

  if (xs === '100') return 'seratus';else if (tailX == '00') return satuan(headX) + ' ratus';else if (headX === '0' || headX == '1') return 'seratus ' + puluhan(tailX);

  return satuan(headX) + ' ratus ' + puluhan(tailX);
};

var pisahAngka = compose(reverse, map(reverse), splitEvery(3), reverse);

var angka = function angka(n) {
  var a = parseInt(n);

  if (n === '100') return '';else if (a < 10) return satuan(n);else if (a < 100) return puluhan(n);else if (a < 1000) return ratusan(n);
};

var nolTiga = function nolTiga(xs) {
  var rxs = reverse(xs);

  return reverse(rxs.map(function (v, i) {
    var j = i + 1;
    var notEmpty = v.length > 0;

    if (!notEmpty) return '';

    if (j === 1) return v;else if (j === 2) {
      if (v == 'satu') return 'seribu';
      return v + ' ribu';
    } else if (j === 3) return v + ' juta';else if (j === 4) return v + ' milyar';else if (j === 5) return v + ' triliun';else if (j === 6) return v + ' kuadriliun';else if (j === 7) return v + ' kuantiliun';else if (j === 8) return v + ' sekstiliun';else if (j === 9) return v + ' septiliun';else if (j === 10) return v + ' oktiliun';else if (j === 11) return v + ' noniliun';else if (j === 12) return v + ' desiliun';
  }));
};

var ubahAngkaKeBahasa = compose(trim, reduce(function (acc, x) {
  return acc + ' ' + x;
}, ''), // gabung
nolTiga, map(angka), pisahAngka, function (x) {
  return x.toString();
});

module.exports = ubahAngkaKeBahasa;
