import React from "react";
import { Link } from "react-router-dom";

function Trading() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-dark fw-bold">Beli & Sewa Peralatan Jaringan</h1>

      <p className="fs-5">
        Butuh perangkat jaringan tapi bingung harus beli di mana? Atau hanya perlu peralatan untuk sementara waktu? Kami menyediakan solusi beli dan sewa perangkat jaringan dengan harga terjangkau dan dukungan teknis langsung.
      </p>

      <div className="mt-4">
        <h4 className="fw-semibold text-dark mb-3">✅ Ketersediaan Barang:</h4>
        <ul className="fs-5">
          <li><strong>Kabel & Konektor:</strong> Kabel LAN berkualitas, konektor RJ45, serta alat crimping untuk kebutuhan instalasi Anda.</li>
          <li><strong>Router WiFi Ekonomis:</strong> Pilihan perangkat dari merk terpercaya seperti TP-Link, D-Link, dan lainnya.</li>
          <li><strong>Repeater & Perangkat Kecil:</strong> Solusi perluasan sinyal WiFi dan alat-alat penunjang jaringan lainnya.</li>
        </ul>
      </div>

      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h5 className="fw-bold text-success">Mengapa Beli/Sewa di Interworkz?</h5>
        <ul>
          <li>✔️ Harga bersahabat, cocok untuk individu dan pelaku usaha kecil.</li>
          <li>✔️ Bisa sewa harian, mingguan, atau bulanan sesuai kebutuhan.</li>
          <li>✔️ Dukungan teknisi untuk setup awal jika dibutuhkan.</li>
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

export default Trading;
