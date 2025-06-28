import React from "react";
import { Link } from "react-router-dom";

function Troubleshooting() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-dark fw-bold">Setting & Troubleshooting Jaringan</h1>

      <p className="fs-5">
        Koneksi internet yang lambat atau sering bermasalah bisa sangat mengganggu pekerjaan dan aktivitas harian. Kami hadir untuk memberikan solusi cepat, tepat, dan profesional!
      </p>

      <div className="mt-4">
        <h4 className="fw-semibold text-dark mb-3">✅ Layanan Kami meliputi:</h4>
        <ul className="fs-5">
          <li><strong>Setting WiFi:</strong> Konfigurasi modem, router, hingga repeater agar sinyal optimal di seluruh ruangan.</li>
          <li><strong>Instalasi Kabel LAN:</strong> Pemasangan kabel jaringan untuk rumah, kos, atau kantor kecil agar koneksi stabil dan cepat.</li>
          <li><strong>Troubleshooting:</strong> Mengatasi masalah umum seperti WiFi lemot, perangkat tidak terhubung, konflik IP, dan lainnya.</li>
        </ul>
      </div>

      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h5 className="fw-bold text-success">Kenapa memilih kami?</h5>
        <ul>
          <li>✔️ Tim teknisi berpengalaman & ramah.</li>
          <li>✔️ Respon cepat dan fleksibel sesuai jadwal Anda.</li>
          <li>✔️ Harga transparan, tanpa biaya tersembunyi.</li>
        </ul>
      </div>

      <div className="mt-5">
        <Link to="/service" className="btn btn-outline-primary">
          ← Kembali ke Layanan
        </Link>
      </div>
    </div>
  );
}

export default Troubleshooting;
