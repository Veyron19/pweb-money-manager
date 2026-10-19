# AI Log - Checkpoint 1

## 1. Memahami Requirement
- Prompt: Tolong bantu aku memahami soal ETS dan pembagian fitur dari W1 sampai W4.
- Dipakai: Sebagai panduan untuk menentukan fitur yang perlu dibuat, mulai dari menambah transaksi sampai menyimpan data.
- Diubah: Menyesuaikan urutan pengerjaan dengan kebutuhan aplikasi Money Manager untuk persona Pedagang Kecil.

## 2. Pembuatan Fitur Transaksi
- Prompt: Sekarang bantu aku mempelajari dan membuat kode HTML, CSS, dan JavaScript untuk fitur transaksi.
- Dipakai: Sebagai referensi dalam membuat form transaksi, menampilkan daftar transaksi, menghapus transaksi, dan menyimpan data menggunakan localStorage.
- Diubah: Menyesuaikan kode dengan struktur file dan kebutuhan aplikasi yang sedang dikerjakan.

## 3. Pengujian Fitur
- Prompt: Kasih gw saran buat ngecek apakah fitur transaksi udah jalan dengan benar.
- Dipakai: Sebagai acuan untuk menguji penambahan, penghapusan, dan penyimpanan transaksi setelah halaman dimuat ulang.
- Diubah: Menyesuaikan pengujian dengan fitur yang tersedia di aplikasi.

## 4. Penyusunan AI Log
- Prompt: Tolong pisahkan AI Log berdasarkan checkpoint dan buat bahasanya lebih natural.
- Dipakai: Sebagai acuan untuk menyusun catatan penggunaan AI selama pengerjaan ETS.
- Diubah: Menyesuaikan isi log dengan fitur dan bantuan yang digunakan pada setiap checkpoint.

# AI Log - Checkpoint 2

## 1. Pengembangan Tampilan
- Prompt: Saran warna yang cocok buat tampilan aplikasi Money Manager yang elegan dan nyaman dilihat.
- Dipakai: Sebagai referensi untuk memilih tema Sage Green dan Cream.
- Diubah: Menyesuaikan warna dengan tampilan aplikasi agar tetap sederhana dan nyaman dilihat.

## 2. Bug Validasi Nominal
- Prompt: Meminta bantuan membuat contoh bug pada validasi nominal transaksi.
- Dipakai: Sebagai referensi untuk mengubah kondisi validasi di script.js agar nominal nol bisa lolos dari pemeriksaan JavaScript.
- Diubah: Mengubah kondisi validasi dari amount <= 0 menjadi amount < 0. Validasi HTML disesuaikan menggunakan novalidate agar nominal nol bisa diuji.

## 3. Bug Urutan Transaksi
- Prompt: Meminta bantuan membuat contoh bug pada pengurutan daftar transaksi.
- Dipakai: Sebagai referensi untuk mengubah pengurutan transaksi di fungsi renderTransactions().
- Diubah: Mengubah urutan dari transaksi terbaru ke terlama menjadi terlama ke terbaru untuk membuat bug yang bisa diuji.

## 4. Dokumentasi dan Evaluasi
- Prompt: Tolong bantu merapikan proses pengerjaan Money Manager dan AI Log berdasarkan checkpoint.
- Dipakai: Sebagai acuan untuk mencatat perubahan kode, proses pengerjaan, dan pengujian bug.
- Diubah: Memisahkan catatan berdasarkan checkpoint dan menyesuaikan isinya dengan perkembangan aplikasi.

## 5. Perbaikan Bug
- Prompt: Bantu perbaiki bug validasi nominal dan urutan transaksi yang sebelumnya dibuat.
- Dipakai: Sebagai referensi untuk memperbaiki validasi nominal dan pengurutan daftar transaksi pada script.js.
- Diubah: Mengembalikan kondisi validasi dari amount < 0 menjadi amount <= 0 agar nominal nol dan angka negatif ditolak. Pengurutan juga dikembalikan dari terlama ke terbaru menjadi terbaru ke terlama agar transaksi terbaru tampil di bagian atas.

# AI Log - Checkpoint 3
## 1. Penambahan Fitur Bonus
- Prompt: Apa fitur bonus yang sederhana dan sesuai untuk aplikasi Money Manager dengan persona Pedagang Kecil?
- Dipakai: Sebagai referensi untuk menentukan fitur tambahan yang bisa membantu pengguna membedakan transaksi pribadi dan usaha.
- Diubah: Menambahkan pilihan dompet Pribadi dan Usaha pada formulir transaksi, menyimpan pilihan dompet bersama data transaksi, dan menampilkan informasi dompet pada daftar transaksi.

## 2. Pengujian Fitur
- Prompt: Bantu tentukan cara menguji perbaikan bug dan fitur bonus pada aplikasi Money Manager.
- Dipakai: Sebagai acuan untuk memeriksa validasi nominal, urutan transaksi, dan pilihan dompet.
- Diubah: Menyesuaikan langkah pengujian dengan fitur yang sudah ditambahkan agar setiap fungsi dapat diperiksa secara bertahap.