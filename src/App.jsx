import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./app.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscription" element={<h1>Subscription</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />

        {/* Compliance Pages */}
        <Route path="/disclaimer" element={<h1>Disclaimer</h1>} />
        <Route path="/privacy-policy" element={<h1>Privacy Policy</h1>} />
        <Route path="/refund-policy" element={<h1>Refund Policy</h1>} />
        <Route path="/terms" element={<h1>Terms</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
