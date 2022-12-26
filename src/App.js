import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import './components/Responsive.css';
import image from './Images/image.webp'
import Donation from "./components/Donation";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="body">
          <Routes>
            <Route
              path="/frugalfashion"
              element={<AboutUs />} 
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
