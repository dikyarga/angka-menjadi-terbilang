## Angka Menjadi Terbilang

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

## Lain-Lain

- Gimana kalo mau menambahkan `rupiah` ?
  Cukup tambahkan `+ 'rupiah'`

  ``` console.log(terbilang(245) + ' rupiah ')```

- Gimana kalo mau mengubah angka menjadi format angka rupiah di Indonesia
  Saya merekomendasikan untuk menggunakan paket ini [rupiah-format](https://www.npmjs.com/package/rupiah-format)

## Test

``` mocha ```

Sebelumnya, install `mocha` secara global terlebih dahulu
``` npm install --save mocha -g```


## Todo
- Tambah fungsi `.rupiah()` jika ingin hasil kalimat diakhiri dengan "rupiah"
