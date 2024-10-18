import Form from "../components/Form";
import Footer from "../components/Footer";
import DesktopHero from "../components/DesktopHero";
import DesktopGallery from "../components/DesktopGallery";

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        <DesktopHero />
        <Form />

        <DesktopGallery />
        <Footer />
      </main>
    </div>
  );
}
