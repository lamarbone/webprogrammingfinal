import React from "react";
import { Link } from "react-router-dom";
import hordeLogo from "../assets/horde-logo.png";
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={hordeLogo} alt="Horde Logo" className="horde-logo" />
        <h1>For the Horde! - A World of Warcraft Fan Page</h1>
      </div>
      
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lore">Lore</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/geography">Geography</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
