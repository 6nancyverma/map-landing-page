import Image from "next/image";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <main className="max-w-lg mx-auto">
        <Hero />
        <Form />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
