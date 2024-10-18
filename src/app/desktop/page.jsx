import Footer from "../components/Footer";
import DesktopHero from "../components/DesktopHero";
import DesktopGallery from "../components/DesktopGallery";
import DesktopForm from "../components/DesktopForm";

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        <DesktopHero />
        <DesktopForm />
        <DesktopGallery />
        <Footer />
      </main>
    </div>
  );
}
