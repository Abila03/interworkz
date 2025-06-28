import BannerAbout from "./components/about/banner";
import Konten from "./components/about/content";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    
    <div>
      <Helmet>
        <title>Tentang Interworkz | Jasa Jaringan Profesional</title>
        <meta name="description" content="Interworkz menyediakan jasa setting jaringan, troubleshooting, hingga konsultasi dan sewa peralatan jaringan untuk UMKM, rumah, dan kantor kecil." />
        <meta name="keywords" content="jaringan, wifi, UMKM, interworkz, router, jasa internet, troubleshooting jaringan" />
        <meta property="og:title" content="Interworkz - Profesional di Dunia Jaringan" />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://interworkz.vercel.app/" />
      </Helmet>
      <BannerAbout/>
      <Konten/>
    </div>
  );
}

export default About;