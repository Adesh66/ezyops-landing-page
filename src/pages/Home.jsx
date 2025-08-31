import HeroBanner from "../components/HeroBanner";
import AppFeature from "../components/AppFeature";
import DownloadSuite from "../components/DownloadSuite";
import ROIIntelligence from "../components/MissionVission";
import ContactForm from "../components/ContactForm";
import BrandPartnersSection from "../components/OurPartners";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";

export default function HospitalityLanding() {
  return (
    <>
      <HeroBanner />
      <AppFeature />
      <OurProducts />
      <DownloadSuite />
      {/* <ROIIntelligence /> */}
      <BrandPartnersSection />
      <ContactForm />

      <Footer />
     
    </>
  );
}
