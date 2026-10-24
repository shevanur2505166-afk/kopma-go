# KOPMA GO — Satu Platform, Semua Kebutuhan Kampus

Website statis (HTML/CSS/JS), prototipe marketplace terpadu koperasi mahasiswa.
Jalankan: buka folder di VS Code, klik kanan index.html, Open with Live Server. Deploy: repo GitHub baru, Settings > Pages > main / root.

## Fitur
Food, Mart & Print (cetak dokumen), Rent (reservasi), Creative (pesan jasa & daftar penyedia), Delivery (daftar mitra kurir), keranjang dengan Pick-Up/Delivery, akun, dan dashboard admin (pesanan, penugasan kurir, persetujuan kurir & penyedia jasa).

## Edit cepat
- `js/data.js`: layanan, katalog (CONTOH DATA), harga, stok, biaya antar, tarif cetak, WhatsApp, email admin.
- Warna: baris `:root` di `css/style.css`.

## Batasan
- Data di localStorage (kunci `kg_`) = DEMO; admin dicek di browser. Produksi: backend (mis. Supabase) + pengecekan hak akses di server.
- Belum ada pembayaran otomatis, upload file cetak (pakai link), pelacakan kurir, reset password, SHU.
- Nama tenant, harga, stok = contoh.
