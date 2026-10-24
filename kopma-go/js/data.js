// ===== EDIT DATA DI SINI =====
const CFG={wa:"6280000000000",admin:["admin@kopmago.test"],fee:5000,print:{bw:500,color:1500}};
const SVC=[
{id:"food",n:"KOPMA Food",i:"🍱",d:"Pesan makanan dan minuman dari koperasi dan tenant mitra secara online."},
{id:"mart",n:"KOPMA Mart & Print",i:"📚",d:"Beli ATK dan perlengkapan kuliah, serta pesan cetak dokumen."},
{id:"rent",n:"KOPMA Rent",i:"🎤",d:"Sewa perlengkapan kegiatan mahasiswa lewat katalog dan reservasi."},
{id:"creative",n:"KOPMA Creative",i:"🎨",d:"Jasa desain, foto, video, editing, dan website dari anggota."},
{id:"delivery",n:"KOPMA Delivery",i:"🛵",d:"Pengantaran makanan, ATK, dan hasil cetak oleh mahasiswa mitra kurir."}];
// CONTOH DATA: nama tenant, harga, dan stok hanya contoh — ganti sesuai kenyataan
const ITEMS=[
{id:"f1",s:"food",n:"Nasi Ayam Geprek",p:15000,m:"Tenant Contoh A",i:"🍗"},
{id:"f2",s:"food",n:"Mie Goreng Telur",p:12000,m:"Kantin KOPMA",i:"🍜"},
{id:"f3",s:"food",n:"Es Teh Manis",p:4000,m:"Kantin KOPMA",i:"🧋"},
{id:"f4",s:"food",n:"Kopi Susu",p:12000,m:"Tenant Contoh B",i:"☕"},
{id:"m1",s:"mart",n:"Buku Tulis 38 Lembar",p:5000,m:"KOPMA Mart",i:"📓"},
{id:"m2",s:"mart",n:"Pulpen (3 pcs)",p:6000,m:"KOPMA Mart",i:"🖊️"},
{id:"m3",s:"mart",n:"Map Folder",p:3000,m:"KOPMA Mart",i:"🗂️"},
{id:"m4",s:"mart",n:"Kertas HVS A4 (100 lembar)",p:15000,m:"KOPMA Mart",i:"📄"},
{id:"r1",s:"rent",n:"Proyektor",p:50000,u:"/hari",stok:2,i:"📽️"},
{id:"r2",s:"rent",n:"Speaker Portable",p:40000,u:"/hari",stok:2,i:"🔊"},
{id:"r3",s:"rent",n:"Tripod Kamera",p:15000,u:"/hari",stok:3,i:"📷"},
{id:"r4",s:"rent",n:"Banner Stand",p:20000,u:"/hari",stok:2,i:"🪧"},
{id:"c1",s:"creative",n:"Desain Poster / Feed",p:50000,by:"Anggota Contoh 1 · Desain grafis",u:"mulai dari",i:"🎨"},
{id:"c2",s:"creative",n:"Foto Kegiatan (per jam)",p:75000,by:"Anggota Contoh 2 · Fotografi",u:"mulai dari",i:"📷"},
{id:"c3",s:"creative",n:"Video Pendek + Editing",p:150000,by:"Anggota Contoh 3 · Videografi",u:"mulai dari",i:"🎬"},
{id:"c4",s:"creative",n:"Website Sederhana",p:500000,by:"Anggota Contoh 4 · Web developer",u:"mulai dari",i:"💻"}];
