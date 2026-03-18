# Ecommerce App

Proyek aplikasi e-commerce ini dibuat sebagai tugas praktikum PLBK Pertemuan 5.

## Fitur utama

- Daftar produk dari FakeStore API
- Filter berdasarkan kategori
- Pencarian produk berdasarkan nama (SearchBar)
- Halaman detail produk dengan endpoint `GET /products/:id`
- Tambah produk ke keranjang
- Update kuantitas di keranjang (+ / -)
- Hapus item dari keranjang
- Checkout dengan konfirmasi dan pembersihan keranjang
- Routing halaman: Home, ProductDetail, Cart
- State management menggunakan React Context + useReducer

## Struktur proyek

- `src/App.jsx` - konfigurasi router dan provider
- `src/pages/Home.jsx` - halaman katalog dan pencarian
- `src/pages/ProductDetail.jsx` - halaman detail produk
- `src/pages/Cart.jsx` - halaman keranjang
- `src/component` - komponen reusable
- `src/context/CartContext.jsx` - context & reducer keranjang
- `src/services/api.js` - API client dan helper axios

## Cara menjalankan

1. Install dependencies:

```bash
pm install
```

2. Jalankan server dev:

```bash
npm run dev
```

3. Buka di browser:

`http://localhost:5173`

## Build produksi

```bash
npm run build
```

## Git workflow

1. `git pull --rebase origin main` kalau ada remote update
2. `git add .`
3. `git commit -m "Tugas Pertemuan 5"`
4. `git push origin main`

## Catatan

- Kalau `git push` ditolak karena fast-forward, lakukan `git pull --rebase` atau merge lalu push lagi.
- Jika terjadi konflik, selesaikan dengan memilih versi yang diinginkan lalu `git add` dan `git rebase --continue`.
