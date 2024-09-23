// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Justin Largo</div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Mobile menu button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-8 md:space-x-4`}
        >
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:underline">
              Timeline
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
