"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-400/30 px-8 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-400 cursor-pointer">
          PrepHatch
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            href="/" 
            className="text-white text-base font-medium transition-colors duration-300 hover:text-purple-400 hover:bg-purple-400/10 px-4 py-2 rounded"
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className="text-white text-base font-medium transition-colors duration-300 hover:text-purple-400 hover:bg-purple-400/10 px-4 py-2 rounded"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-white text-base font-medium transition-colors duration-300 hover:text-purple-400 hover:bg-purple-400/10 px-4 py-2 rounded"
          >
            Contact
          </Link>
          <Link href="/login">
          <button className="bg-purple-400 text-white border-none px-6 py-3 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-md">
            Sign In
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-2"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-purple-400/30 px-8 py-4 flex flex-col gap-4 md:hidden">
          <Link 
            href="/" 
            className="text-white text-base font-medium py-2"
          >
            Home
          </Link>
         
          <Link 
            href="/about" 
            className="text-white text-base font-medium py-2"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-white text-base font-medium py-2"
          >
            Contact
          </Link>
          <button className="bg-purple-400 text-white border-none px-6 py-3 rounded-md text-base font-semibold cursor-pointer mt-2 self-start">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;