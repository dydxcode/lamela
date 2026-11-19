# Private Video Media Player

Implementasi sesuai spesifikasi:

- Next.js 16.4.6 (App Router), Node.js 26.x, TypeScript, Tailwind CSS v4, Zod v4, npm.
- Data video: JSON statis `data/videos.json` dengan properti `id` dan `url` saja.
- Route halaman video: `/e/{id_unik}`.
- Media player HTML5 berbasis `url` dari JSON.
- Kode iklan: `config/ads.ts` → dirender tepat sebelum `</head>`.
- Histats: `config/histats.ts` → dirender tepat sebelum `</head>`.

## Menjalankan

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
npm run start
```
