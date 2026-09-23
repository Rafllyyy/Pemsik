console.log("tes");

const nama = "iqbal";
const nim = "16723";
const umur = "20";
const nilai = [80,90,100];

console.log("nama " + nama + ",umur " + umur);

//konsep esti pertama
//literal output 
console.log(`Nama: ${nama},umur: ${umur}`);

//konsep esti kedua
//function cara keindahan
const data_diri = (nama,nim) => `Nama: ${nama},umur: ${umur}`;

console.log(data_diri(nama,nim));

//function cara lama 
function penjumlahan1(bil1,bil2){
    return bil1 + bil2;
}

//cara esti 
const penjumlahan2 = (bil1, bil2) => bil1 + bil2;

console.log(penjumlahan1(20, 31));
console.log(penjumlahan2(20, 31));
