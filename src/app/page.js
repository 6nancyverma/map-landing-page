import Image from "next/image";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import DesktopGallery from "./components/DesktopGallery";

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        <Hero />
        <Form />
        {/* <div className="lg:hidden">
          <Gallery />
        </div> */}
        {/* <div className="hidden lg:block"> */}
        <DesktopGallery />
        {/* </div> */}
        <Footer />
      </main>
    </div>
  );
}
