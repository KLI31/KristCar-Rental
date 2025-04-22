import HeaderSection from "./(home)/components/HeaderSection/HeaderSection";
import InfoSection from "./(home)/components/InfoSection/InfoSection";
import KeyFeatures from "./(home)/components/KeyFeatures/KeyFeatures";
import VehicleFleet from "./(home)/components/VehicleFleet/VehicleFleet";
import BookProcess from "./(home)/components/BookProcess/BookProcess";
import SafetyAndQuality from "./(home)/components/SafetyAndQuality/SafetyAndQuality";
import AppSection from "./(home)/components/AppSection/AppSection";
import Footer from "./(home)/components/Footer/Footer";
import ScrollToTop from "./(home)/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <HeaderSection />
      <InfoSection />
      <KeyFeatures />
      <VehicleFleet />
      <BookProcess />
      <SafetyAndQuality />
      <AppSection />
      <Footer />
    </main>
  );
}
