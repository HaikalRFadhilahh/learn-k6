import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Jumlah Vistual Users yang mengakses secara bersamaan
  vus: 10,

  // Lama Waktu Durasi Eksekusi
  // duration: "30s",
  duration: "20s",

  // Summary Hasil Custom
  summaryTrendStats: ["avg", "min", "max", "p(99)"],

  // Cara Menghitung Jumlah Request
  // Jumlah Request = Jumlah Virtual User * Lama Durasi * Delay
};

export default function () {
  http.get("https://jsonplaceholder.typicode.com/users");
  sleep(1);
}
