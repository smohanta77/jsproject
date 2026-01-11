"use client"; // REQUIRED for interactivity

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-charcoal tracking-tighter" onClick={closeMenu}>
            SUDHHI<span className="text-burnt-orange">.</span>
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-10 items-center font-medium text-sm tracking-wide">
            <Link href="/#services" className="hover:text-burnt-orange transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-burnt-orange transition-colors">Work</Link>
            <Link href="/about" className="hover:text-burnt-orange transition-colors">About</Link>
            <Link href="/blog" className="hover:text-burnt-orange transition-colors">Blog Post</Link>
            
            <Link href="/contact" className="px-6 py-2.5 border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all">
              Let&apos;s Talk
            </Link>
          </div>

          {/* MOBILE BURGER BUTTON (Visible on Mobile) */}
          <button 
            className="md:hidden text-charcoal p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* This renders only when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col px-6 py-10 space-y-6 text-center">
            
            <Link 
              href="/#services" 
              className="text-xl font-medium text-charcoal hover:text-burnt-orange"
              onClick={closeMenu}
            >
              Services
            </Link>
            
            <Link 
              href="/portfolio" 
              className="text-xl font-medium text-charcoal hover:text-burnt-orange"
              onClick={closeMenu}
            >
              Work
            </Link>
            
            <Link 
              href="/about" 
              className="text-xl font-medium text-charcoal hover:text-burnt-orange"
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link 
              href="/blog" 
              className="text-xl font-medium text-charcoal hover:text-burnt-orange"
              onClick={closeMenu}
            >
              Blog Post
            </Link>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block px-10 py-4 bg-charcoal text-white text-lg rounded-full font-bold hover:bg-black transition-all shadow-lg"
                onClick={closeMenu}
              >
                Let&apos;s Talk
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
}