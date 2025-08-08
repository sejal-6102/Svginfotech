import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-0 w-full z-50 px-6 md:px-20 transition-all duration-300 
        ${isScrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="assets/img/logo.png"
            alt="Logo"
            className="h-14 md:h-16 object-contain"
          />
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-12 text-white text-sm md:text-lg lg:text-xl font-medium navbar-font">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
          <Link to="/services" className="hover:text-purple-400">Services</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
        </div>

        {/* Button - Hide on mobile */}
        <div className="hidden md:flex justify-center">
          <button className="gradient bg-white rounded p-2">Book Call</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 text-white bg-black/80 backdrop-blur-sm mt-2 rounded-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400">About</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400">Services</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
