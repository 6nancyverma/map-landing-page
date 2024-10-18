import Footer from "../components/Footer";
import DesktopHero from "../components/DesktopHero";
import DesktopGallery from "../components/DesktopGallery";
import DesktopFormSection from "../components/DesktopFormSection";

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        <DesktopHero />
        <DesktopGallery />
        <DesktopFormSection />

        <Footer />
      </main>
    </div>
  );
}
