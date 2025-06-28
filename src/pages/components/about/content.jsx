import React from "react";
import { Link } from "react-router-dom";

function Konten() {
  return (
    <div className="container py-5">
      <h1 className="text-dark fw-bold mb-4 text-center">Tentang Interworkz</h1>

      <p className="fs-5 text-center">
        <strong>Interworkz</strong> adalah penyedia layanan teknologi jaringan yang berdiri untuk menjawab kebutuhan konektivitas rumah, kantor kecil, UMKM, hingga institusi. Kami mengutamakan pelayanan yang cepat, transparan, dan dapat diandalkan, karena kami percaya bahwa jaringan yang kuat adalah fondasi utama produktivitas di era digital ini.
      </p>

      <div className="my-5 text-center">
        <h4 className="fw-semibold text-dark mb-3">Visi Kami</h4>
        <p className="fs-5">
          Menjadi mitra jaringan lokal paling terpercaya di Indonesia.
        </p>

        <h4 className="fw-semibold text-dark mt-4 mb-3">Misi Kami</h4>
        <ul className="fs-5">
          <p className="text-center">🔧 Memberikan layanan jaringan yang cepat dan tepat.</p>
          <p>📚 Mengedukasi pelanggan agar lebih memahami teknologi.</p>
          <p>💡 Menyediakan solusi teknis yang hemat dan berkelanjutan.</p>
        </ul>
      </div>

      <div className="p-4 bg-light rounded shadow-sm">
        <h5 className="fw-bold text-success mb-3">Apa yang Membuat Kami Berbeda?</h5>
        <ul className="fs-5">
          <li>👷 Teknisi berpengalaman & bersertifikat</li>
          <li>⚡ Respon cepat dan jadwal fleksibel</li>
          <li>💼 Fokus pada kebutuhan rumah tangga, UMKM, dan instansi kecil</li>
          <li>📞 Konsultasi gratis sebelum eksekusi</li>
        </ul>
      </div>

      <div className="mt-5 fs-5 text-center">
        <p>
          Interworkz berawal dari keinginan sederhana untuk membantu lingkungan sekitar yang kesulitan dengan jaringan internet mereka. Kini kami tumbuh sebagai tim profesional yang siap menjawab berbagai tantangan jaringan dengan solusi efektif dan berorientasi pada kebutuhan pelanggan.
        </p>
      </div>
    </div>
  );
}

export default Konten;
