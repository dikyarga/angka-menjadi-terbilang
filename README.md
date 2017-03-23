## Angka menjadi Terbilang

Paket ini akan merubah angka menjadi kata-kata terbilang dalam Bahasa Indonesia. Misal, 234 menjadi 'dua ratus tiga puluh empat'.

## Cara Penggunaan

#### Install package

``` npm install angka-menjadi-terbilang --save```

#### Panggil

``` let terbilang = require('angka-menjadi-terbilang') ```

#### Penggunaan

``` console.log(terbilang(234)) ```

hasil

``` dua ratus tiga puluh empat ```

## Lain-lain

- Gimana kalo mau menambahkan rupiah ?
  cukup tambahkan + 'rupiah'

  ``` console.log(terbilang(245) + ' rupiah ')```

- Gimana kalo mau merubah angka menjadi format angka rupiah di Indonesia
  Saya merekomendasikan untuk menggunakan paket ini [rupiah-format](https://www.npmjs.com/package/rupiah-format)

## Test

``` node test.js ```
