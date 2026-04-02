import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./app.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contact" element={<Contact />} />

        {/* Compliance Pages */}
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<h1>Privacy Policy</h1>} />
        <Route path="/refund-policy" element={<h1>Refund Policy</h1>} />
        <Route path="/terms" element={<h1>Terms</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
