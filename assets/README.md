
# FootyMarket – Demo (Mirip Transfermarkt)

Proyek statis (tanpa backend) yang meniru tampilan/fitur dasar halaman tim di Transfermarkt.

## Cara Menjalankan
1. Ekstrak ZIP ini.
2. **Disarankan** jalankan dengan server lokal agar `fetch`/JS berfungsi dengan baik di semua browser.
   - Jika punya Python 3: `cd` ke folder, lalu `python -m http.server 8080` dan buka `http://localhost:8080`
   - Atau cukup **klik ganda** `index.html` (bisa saja bekerja di sebagian browser).
3. Navigasi lewat tab: Overview, Squad, Fixtures, Transfers, Market Value, News.

## Kustomisasi Cepat
- Ubah data pemain/fixture langsung di `js/app.js` pada objek `state`.
- Ubah warna/tema di `css/styles.css` (variabel CSS pada `:root`).
- Ganti logo di `assets/logo.svg`.

## Catatan
Konten & data bersifat contoh/dummy untuk pembelajaran UI. Tidak ada materi berhak cipta yang disalin.
