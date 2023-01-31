/*jshint esversion:6*/

const siyahCayDemle = () => "1 bardak siyah cay";
const beyazCayDemle = () => "1 bardak beyaz cay";

const caylaaarrr  = [];

const cayVerBakalim = (cayDemle, kacBardak) => {

    for (let bardak = 1; bardak <= kacBardak; bardak +=1) {
        birBardakCay = cayDemle();
        caylaaarrr.push(birBardakCay);
    }

    return caylaaarrr;

};
console.log(cayVerBakalim(siyahCayDemle, 10));
