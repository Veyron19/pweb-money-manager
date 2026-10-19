# Proses Pengerjaan Money Manager

    Nama: Reza  
    NRP: 5053251050  
    Kelas: M

## Checkpoint 1
    ### Tahap Persiapan
    Menentukan persona Pedagang Kecil sebagai target pengguna aplikasi. Aplikasi dirancang untuk membantu pencatatan transaksi keuangan usaha menggunakan HTML, CSS, dan JavaScript.

## W1 - Tambah Transaksi
    Membuat formulir transaksi yang berisi tanggal, jenis transaksi, kategori, nominal, dan catatan opsional. Kategori disediakan dalam pilihan tetap agar pengguna dapat memilih kategori yang sesuai.

## W2 - Daftar Transaksi
    Menampilkan transaksi yang dimasukkan pengguna secara dinamis menggunakan JavaScript. Transaksi terbaru ditampilkan di bagian atas dan nominal ditampilkan dalam format Rupiah.

## W3 - Hapus Transaksi
    Menambahkan tombol hapus pada setiap transaksi. Konfirmasi ditampilkan sebelum transaksi benar-benar dihapus.

 ## W4 - Data Persisten
    Menggunakan localStorage untuk menyimpan transaksi pada browser. Data yang tersimpan dibaca kembali ketika halaman dibuka atau dimuat ulang.

## Pengujian CP1
    Melakukan pengujian penambahan transaksi, tampilan daftar, penghapusan dengan konfirmasi, dan penyimpanan data setelah halaman dimuat ulang.

## Checkpoint 2

## Pengembangan Tampilan
    Menyesuaikan tampilan Money Manager dengan tema Sage Green dan Cream agar lebih rapi dan nyaman digunakan. Perubahan warna dilakukan dengan mempertahankan layout dan ukuran elemen yang sudah ada.

## Bug 1 - Validasi Nominal
    Ditemukan masalah pada validasi nominal karena kondisi pemeriksaan hanya menolak angka negatif, sehingga angka nol dapat lolos dari validasi JavaScript.

    Pengujian dilakukan dengan memasukkan nominal nol dan mencoba menyimpan transaksi. Hasil pengujian dicatat berdasarkan perilaku aplikasi.
## Bug 2 - Urutan Daftar Transaksi
    Ditemukan masalah pada pengurutan transaksi karena perbandingan waktu dibuat secara menaik. Akibatnya, transaksi yang lebih lama ditampilkan sebelum transaksi terbaru.
    Pengujian dilakukan dengan menambahkan dua transaksi secara berurutan dan memeriksa posisi transaksi pada daftar.


## Perbaikan Bug
Memperbaiki dua bug yang sebelumnya dibuat pada Checkpoint 2. Validasi nominal diubah agar nominal nol dan angka negatif ditolak. Pengurutan transaksi juga diperbaiki agar transaksi terbaru ditampilkan di bagian atas daftar.

## Fitur Bonus - Pilihan Dompet
Menambahkan pilihan dompet Pribadi dan Usaha pada formulir transaksi agar pengguna dapat menentukan jenis dompet untuk setiap transaksi. Informasi dompet disimpan bersama data transaksi dan ditampilkan pada daftar transaksi untuk memudahkan pengguna membedakan transaksi pribadi dan usaha.

## Pengujian Checkpoint 3
Melakukan pengujian terhadap perbaikan validasi nominal dan urutan transaksi, serta fitur pilihan dompet. Pengujian mencakup penolakan nominal nol dan negatif, tampilan transaksi terbaru di bagian atas, pemilihan dompet Pribadi atau Usaha, serta penyimpanan data setelah halaman dimuat ulang.

