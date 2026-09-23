//Bedah data JSON: Array dan Object

//array
const nilai = [100,20,80];

//destructuring array = membedah data array
const nilai2 = nilai[1];
console.log(`Nilai ke dua dari array: ${nilai2}`);

//spread array = nambah / kurangi data array
const nilai_new = [90];
const array_nilai_tambah = [...nilai_new,nilai];
const tambah_dibelakang = [nilai,...nilai_new];

console.log(`Tambah belakang ${tambah_dibelakang}`);
console.log(`kumpulan array nilai baru ${array_nilai_tambah}`);


//=============

//object 
const mhs = {
    namaku: "Rafly",
    umurku: 20,
    nilaiku: [90,90,100]
};

//destructuring object 
const nama_ku = mhs.nama;
const {namaku, umurku, nilaiku} = mhs;

console.log(`Nama ${namaku}, umur ${umurku} `)

//spread objecT = tambah data key_value ke object

//array of object = artinya kumpulan object dalam array
const list_mhs = [
    {
        nama: "Rafly",
        umur: 20,
    },
    {
        nama: "rohman",
        umur: 19
    }
]

//destructuring array of object 
const nama_mhs_kedua = list_mhs[1].nama;

console.log(nama_mhs_kedua);

//spread, tambah object ke array of object 