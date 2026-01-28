import HeroBanner from "./components/HeroBanner";
import OurStory from "./components/OurStory";
import MannheimBeers from "./components/MannheimBeers";
import FindUs from "./components/FindUs";
import MannheimCoffee from "./components/MannheimCoffee";
import OurOutlets from "./components/OurOutlets";
import HostParties from "./components/HostParties";
import ContactUs from "./components/ContactUs";
import PartnerWithUs from "./components/PartnerWithUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#121212]">
      <HeroBanner />
      <OurStory />
      <MannheimBeers />
      <FindUs />
      <MannheimCoffee />
      <OurOutlets />
      <HostParties />
      <ContactUs />
      <PartnerWithUs />
      <Footer />
    </main>
  );
}
