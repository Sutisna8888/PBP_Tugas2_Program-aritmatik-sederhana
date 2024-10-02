// Menghitung Keliling Lingkaran
let jari2 = 4;
let Keliling = (22 / 7) * 2 * jari2;
console.log("Keliling Lingkaran berjari-jari " + jari2, "Adalah " + Keliling);

// Menghitung Luas Persegi Panjang
let panjang = 10;
let lebar = 5;
let Luas = panjang * lebar;
console.log("Luas Persegi Panjang Adalah " + Luas);

// Menghitung Volume Kubus
const sisi = 5;
const volume = sisi ** 3;
console.log("Volume Kubus Adalah " + volume);

// Program Konversi Celcius ke Fahrenheit
let Celcius = prompt("Masukan Suhu dalam Celcius ");
let Suhu = (Celcius * 9) / 5 + 32;
console.log("Suhu dalam Fahrenheit adalah " + Suhu);

// Program Menghitung Uang Kembalian
const jumlahTelur = prompt("Masukan jumlah Telur yang Ingin dibeli ");
const hargaTelur = 28000;
const totalBayar = prompt("Masukan Nominal Uang pembayaran ");
const uangKembalian = totalBayar - jumlahTelur * hargaTelur;
alert("Total Uang Kembalian = " + uangKembalian);
console.log("Uang kembalian : " + uangKembalian);
