import React from "react";
import { Link } from "react-router-dom";

function Konsulmain() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-dark fw-bold">Konsultasi & Maintenance Jaringan</h1>

      <p className="fs-5">
        Performa jaringan yang stabil dan aman adalah fondasi penting dalam mendukung kelancaran bisnis dan aktivitas harian. Kami hadir untuk memberikan layanan konsultasi dan perawatan jaringan secara profesional dan berkelanjutan.
      </p>

      <div className="mt-4">
        <h4 className="fw-semibold text-dark mb-3">✅ Layanan Utama Kami:</h4>
        <ul className="fs-5">
          <li><strong>Audit & Keamanan WiFi:</strong> Deteksi celah keamanan dan optimasi pengaturan agar WiFi Anda tidak mudah dibobol.</li>
          <li><strong>Konsultasi Setup Jaringan:</strong> Rancang sistem jaringan rumah, kantor kecil, atau toko agar hemat biaya & efisien.</li>
          <li><strong>Maintenance Bulanan:</strong> Pemeliharaan rutin untuk UMKM, warnet, dan institusi kecil agar jaringan tetap prima.</li>
        </ul>
      </div>

      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h5 className="fw-bold text-success">Keunggulan Layanan Kami</h5>
        <ul>
          <li>✔️ Solusi disesuaikan dengan kebutuhan dan anggaran Anda.</li>
          <li>✔️ Tim ahli yang siap memberikan rekomendasi terbaik.</li>
          <li>✔️ Jadwal fleksibel & laporan rutin setiap kunjungan.</li>
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

export default Konsulmain;
