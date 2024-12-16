import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lore from "./pages/Lore";
import Characters from "./pages/Characters";
import Geography from "./pages/Geography";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
