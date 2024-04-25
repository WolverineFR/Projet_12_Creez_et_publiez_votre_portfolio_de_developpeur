import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Realisation from "./pages/Realisation";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="/Realisation" element={<Realisation />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
