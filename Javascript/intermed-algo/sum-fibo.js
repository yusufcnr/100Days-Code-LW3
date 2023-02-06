//jshint esversion:6

function sumFibs(number) {

    let oncekiSayi =0;
    let simdikiSayi = 1;
    let toplam = 0;

    while (simdikiSayi <= number) {

        if((simdikiSayi) % 2 !== 0) {
            toplam = toplam + simdikiSayi;
        }


        simdikiSayi += oncekiSayi;
        oncekiSayi = simdikiSayi - oncekiSayi;
        
    }

    return  toplam;
}
console.log(sumFibs(75024));