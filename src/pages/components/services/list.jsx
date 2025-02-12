import '../../style.css';

function ListService() {
  return (
    <section class="py-5 border-bottom" id="features">
        <div class="container px-5 my-5">
            <div class="row gx-5">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                    <h2 class="h4 fw-bolder">Setting dan Troubleshooting Jaringan</h2>
                    <p>✅ Setting WiFi (modem, router, repeater).</p>
                    <p>✅ Instalasi kabel LAN untuk rumah/kantor kecil.</p>
                    <p>✅ Troubleshooting jaringan (WiFi lemot, tidak bisa konek, dll.).</p>
                    <a class="text-decoration-none" href="#!">
                        Call to action
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                    <h2 class="h4 fw-bolder">Konsultasi dan Maintenance Jaringan</h2>
                    <p>✅ Audit dan peningkatan keamanan WiFi.</p>
                    <p>✅ Konsultasi setup jaringan kantor/rumah kecil.</p>
                    <p>✅ Maintenance jaringan bulanan untuk UMKM atau warnet.</p>
                    <a class="text-decoration-none" href="#!">
                        Call to action
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                <div class="col-lg-4">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                    <h2 class="h4 fw-bolder">Beli dan Sewa Peralatan Jaringan</h2>
                    <p>✅ Kabel LAN, konektor RJ45, dan alat crimping.</p>
                    <p>✅ Router WiFi murah (TP-Link, Tenda, dll.).</p>
                    <p>✅ Repeater WiFi dan perangkat jaringan kecil lainnya.</p>
                    <a class="text-decoration-none" href="#!">
                        Call to action
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ListService;