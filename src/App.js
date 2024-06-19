import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Realisations from "./pages/Realisations";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Erreur404 from "./pages/Erreur404";

function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
