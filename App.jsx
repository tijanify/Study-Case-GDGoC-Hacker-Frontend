import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import OurVelues from './components/OurVelues';
import WaysToContribute from './components/WaysToContribute';
import Responsibility from './components/Responsibility';
import CTAsection from './components/CTAsection';
import Footer from './components/Footer';

import ContactPage from './components/ContactPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <OurVelues />
      <WaysToContribute />
      <Responsibility />
      <CTAsection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route path="/" element={<HomePage />} />

  <Route path="/about" element={<HomePage />} />

  <Route path="/overview" element={<HomePage />} />

  <Route
    path="/contact"
    element={
      <>
        <ContactPage />
        <Footer />
      </>
    }
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;