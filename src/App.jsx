import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import FeaturedProjects from "./components/home/FeaturedProjects";
import WatchOurWork from "./components/videos/WatchOurWork";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";
import ForestryMulching from "./pages/ForestryMulching";
import Septic from "./pages/Septic";
import PromoStrip from "./components/home/PromoStrip";
import Reviews from "./components/home/Reviews";

import Gallery from "./pages/Gallery";

function HomePage() {
  return (
    <div className="bg-[#0B0B0B] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <PromoStrip />

        <Services />

        <About />

        <FeaturedProjects />

        <Reviews />

        <WatchOurWork />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="services/forestry-mulching" element={<ForestryMulching />} />

      <Route path="/septic" element={<Septic />} />

    </Routes>
  );
}

export default App;