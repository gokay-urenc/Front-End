// Bir öğrencinin bilgilerini alıp notunu hesaplayan program.

var ad = prompt("Ad: ");
var ogrno = prompt("Öğrenci No: ");
var cinsiyet = prompt("Cinsiyet: "); // Erkek: true | Kadın: false
var ders = prompt("Ders Adı: ");
var not1 = prompt("1. Not: ");
var not2 = prompt("2. Not: ");
var ortalama = (Number(not1) + Number(not2)) / 2;
console.log(ogrno + " numaralı " + ad + "(" + cinsiyet + ")" + " isimli öğrencinin " + ders + " dersinden aldığı ortalama " + ortalama);