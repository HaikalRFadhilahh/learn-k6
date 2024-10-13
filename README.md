# K6 Perfomance Testing

<p>K6 untuk melakukan performance testing pada web atau API Service yang mengexport Summary / Hasil Dari Script Testing (Json / CSV)</p>

### Penjelasan Script

- `export const options {}` (Untuk Mengkonfigurasi setting testing k6)
- `export default function ()` (untuk fungsi utama yang di eksekusi terus menerus dari k6)

### Instalasi Project K6

- `npm init`
- `npm install k6`
- `npm install --save-dev @types/k6`

### Running Script K6

- `k6 run path.js` (Menjalankan File Testing K6 Biasa)
- `k6 run pathTesting.js --summary-export pathOutput.json / pathOutput.csv` (Melakukan Testing dan export summary testing)
- `k6 run --out json=pathOutput.json pathTestingScript.js` (Melakukan Live Output File Result Testing)

### Running K6 with Web Interactive Dashboard

- `echo "export K6_WEB_DASHBOARD=true >> ~/.zshrc && source ~/.zshrc"` (Tambah export variable pada file .bashrc / .zshrc)
- `export K6_WEB_DASHBOARD=true` (Export Variable Menggunakan Sesi terminal. notes: hilang saat sesi terminal di terminate)
