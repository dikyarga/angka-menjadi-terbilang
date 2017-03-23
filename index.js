"use strict"

module.exports = function terbilang(angka, result = '') {

    let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    let belasan = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas',
                   'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas']

    if (angka.toString().length == 13 || angka.toString().length == 14 || angka.toString().length == 15) {

        if (Math.floor(angka / 1000000000000).toString().length > 1) {
            return terbilang(Math.floor(angka / 1000000000000), result) + ' triliun ' +
                terbilang((angka - (Math.floor(angka / 1000000000) * 1000000000)), result)
        }
        let firstChar = angka.toString()[0]
        result += satuan[firstChar]
        result += ' triliun '
        angka = angka - (firstChar * 1000000000000)

        return terbilang(angka, result)
    }

    if (angka.toString().length == 10 || angka.toString().length == 11 || angka.toString().length == 12) {

        if (Math.floor(angka / 1000000000).toString().length > 1) {
            return terbilang(Math.floor(angka / 1000000000), result) + ' miliar ' +
                terbilang((angka - (Math.floor(angka / 1000000000) * 1000000000)), result)
        }
        let firstChar = angka.toString()[0]
        result += satuan[firstChar]
        result += ' miliar '
        angka = angka - (firstChar * 1000000000)

        return terbilang(angka, result)

    }

    if (angka.toString().length == 7 || angka.toString().length == 8 || angka.toString().length == 9) {
        if (Math.floor(angka / 1000000).toString().length > 1) {
            return terbilang(Math.floor(angka / 1000000), result) + ' juta ' +
                terbilang((angka - (Math.floor(angka / 1000000) * 1000000)), result)
        }
        let firstChar = angka.toString()[0]
        result += satuan[firstChar]
        result += ' juta '
        angka = angka - (firstChar * 1000000)
        return terbilang(angka, result)

    }
    if (angka.toString().length == 4 || angka.toString().length == 5 || angka.toString().length == 6) {
        if (Math.floor(angka / 1000).toString().length > 1) {
            return terbilang(Math.floor(angka / 1000), result) + ' ribu ' +
                terbilang((angka - (Math.floor(angka / 1000) * 1000)), result)
        }
        let firstChar = angka.toString()[0]
        result += satuan[firstChar]
        result += ' ribu '
        angka = angka - (firstChar * 1000)
        return terbilang(angka, result)

    } else if (angka.toString().length == 3) {
        let firstChar = angka.toString()[0]
        result += satuan[firstChar]
        result += ' ratus '
        angka = angka - (firstChar * 100)
        return terbilang(angka, result)

    } else if (angka.toString().length == 2 || angka.toString().length == 1) {
        if (angka < 20) {
            if (angka > 10) {
                let temp = angka - 10
                let firstChar = angka.toString()[0]
                result += belasan[temp]
                angka -= (firstChar * 10)
                return result
            } else {
                result += satuan[angka]
                return result
            }
            return terbilang(angka, result)

        } else {
            let firstChar = angka.toString()[0]
            result += satuan[firstChar] + ' '
            result += ' puluh '
            angka = angka - (firstChar * 10)
            return terbilang(angka, result)
        }
    } else {
        // result += satuan[angka]
    }
    return result
}
