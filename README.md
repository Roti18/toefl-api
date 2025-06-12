# API Latihan TOEFL

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

REST API sederhana yang menyediakan soal-soal latihan TOEFL dari berbagai kategori. Proyek ini dibuat untuk tujuan edukasi, menunjukkan cara membangun API dari nol menggunakan Node.js dan Express.js, serta cara menyajikan data dari file JSON statis.

**Dokumentasi Live bisa diakses di:** [https://toefl-api.vercel.app/](https://toefl-api.vercel.app/)

## ✨ Fitur Utama

- **Data Soal Lengkap**: Menyediakan ratusan soal yang terbagi dalam 3 kategori utama (Structure, Reading, Listening).
- **Endpoint Fleksibel**:
  - `GET` soal berdasarkan kategori.
  - `GET` soal acak dari setiap kategori untuk latihan cepat.
- **Perhitungan Skor Otomatis**: Endpoint `POST` untuk mengirim jawaban dan mendapatkan skor secara langsung.
- **Dokumentasi API**: Halaman dokumentasi interaktif yang dibuat dengan HTML & Tailwind CSS untuk mempermudah penggunaan API.
- **Siap Deploy**: Dikonfigurasi untuk deployment mudah di platform seperti Vercel atau Render.

## 💻 Teknologi yang Digunakan

- **Backend**: Node.js, Express.js
- **Data**: JSON statis
- **Deployment**: Vercel

## 📂 Struktur Proyek

```
/
├── public/
│   └── index.html      # Halaman Dokumentasi API
├── data/
│   └── soal.json       # Bank Soal Lengkap
├── index.js            # Server Utama Express
├── vercel.json         # Konfigurasi untuk Deployment Vercel
└── package.json
```

## 🚀 Endpoint API Utama

| Metode | Endpoint                 | Deskripsi                                    |
| :----- | :----------------------- | :------------------------------------------- |
| `GET`  | `/api/soal/:tipe`        | Mengambil semua soal dari kategori tertentu. |
| `GET`  | `/api/soal/:tipe/random` | Mengambil satu soal/paket soal acak.         |
| `POST` | `/api/submit`            | Mengirim jawaban untuk dihitung skornya.     |

_Untuk detail lengkap, parameter, dan contoh, silakan kunjungi [halaman dokumentasi](https://toefl-api.vercel.app/)._

## 🛠️ Cara Menjalankan Secara Lokal

1.  **Clone repository ini:**

    ```bash
    git clone [https://github.com/NAMA_USER_ANDA/NAMA_REPO_ANDA.git](https://github.com/NAMA_USER_ANDA/NAMA_REPO_ANDA.git)
    cd NAMA_REPO_ANDA
    ```

2.  **Install semua dependency:**

    ```bash
    npm install
    ```

3.  **Jalankan server development:**

    ```bash
    npm run dev
    ```

4.  API akan berjalan di `http://localhost:3000`. Buka alamat tersebut di browser untuk melihat halaman dokumentasi.

## 🤝 Kontribusi

Merasa ada yang bisa diperbaiki atau ingin menambahkan soal baru? Silakan buat _Pull Request_! Semua kontribusi diterima dengan senang hati.
