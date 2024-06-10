const items = [
  "images/Teknologi-tradisional.png",
  "images/Olahraga-Tradisional.png",
  "images/Manuskrip.png",
  "images/Permainan-Rakyat.png",
  "images/Adat-Istiadat.png",
  "images/Kesenian.png",
  "images/Bahasa.png",
  "images/Pengetahuan-Tradisional.png",
  "images/Ritus.png",
  "images/Tradisi-Lisan.png",
]; // Daftar path gambar yang akan ditampilkan
let currentItemIndex = 0; // Indeks item saat ini

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const currentItem = document.getElementById("current-item");

// Objek yang menentukan URL untuk setiap item
const itemURLs = {
  "images/Banjar.png": "budaya-banjar.html",
  "images/Bakumpai.png": "budaya-dayak.html",
  "images/Meratus.png": "budaya-meratus.html",
};

// Fungsi untuk menampilkan item berikutnya
function showNextItem() {
  currentItemIndex = (currentItemIndex + 1) % items.length;
  currentItem.innerHTML = `<img src="${items[currentItemIndex]}" alt="Item">`; // Menetapkan sumber gambar ke elemen currentItem
}

// Fungsi untuk menampilkan item sebelumnya
function showPreviousItem() {
  currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
  currentItem.innerHTML = `<img src="${items[currentItemIndex]}" alt="Item">`; // Menetapkan sumber gambar ke elemen currentItem
}

// Tambahkan event listener untuk tombol panah kiri
leftArrow.addEventListener("click", showPreviousItem);

// Tambahkan event listener untuk tombol panah kanan
rightArrow.addEventListener("click", showNextItem);

// Tambahkan event listener untuk elemen currentItem
currentItem.addEventListener("click", function () {
  // Ambil URL dari objek itemURLs berdasarkan item yang dipilih
  const itemURL = itemURLs[items[currentItemIndex]];

  // Redirect pengguna ke URL yang sesuai
  if (itemURL) {
    window.location.href = itemURL;
  }
});
