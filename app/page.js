import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="flex-1">
        <Header />
        <Gallery />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
