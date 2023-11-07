import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Careers from "./Pages/Careers/Careers";
import SingleCareer from "./Pages/SingleCareer/SingleCareer";
import ApplyNow from "./Pages/ApplyNow/ApplyNow";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career" element={<SingleCareer />} />
        <Route path="/apply-now" element={<ApplyNow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
