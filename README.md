## Angka menjadi Terbilang

Paket ini akan merubah angka menjadi kata-kata terbilang dalam Bahasa Indonesia. Misal, 234 menjadi 'dua ratus tiga puluh empat'.

## Cara Penggunaan

#### Install package

``` npm install angka-menjadi-terbilang --save```

#### Penggunaan

```
const terbilang = require('angka-menjadi-terbilang')

console.log(terbilang(234)) // dua ratus tiga puluh empat
console.log(terbilang('1.000.000.001')) // satu milyar satu
```

## Lain-lain

- Gimana kalo mau menambahkan rupiah ?
  cukup tambahkan + 'rupiah'

  ``` console.log(terbilang(245) + ' rupiah ')```

- Gimana kalo mau merubah angka menjadi format angka rupiah di Indonesia
  Saya merekomendasikan untuk menggunakan paket ini [rupiah-format](https://www.npmjs.com/package/rupiah-format)

## Test

``` mocha ```

sebelumnya install mocha secara globally terlebih dahulu, ``` npm install --save mocha -g```


## Todo
- Tambah fungsi .rupiah() jika ingin hasil kalimat di ikut dengan "rupiah"
