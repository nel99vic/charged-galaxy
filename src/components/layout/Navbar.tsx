"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/shop" },
    { name: "Cursos", href: "/courses" },
    { name: "Inspiración", href: "/blog" },
    { name: "Comunidad", href: "/community" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-8 w-8 text-neon-pink animate-pulse" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple text-glow">
              BALLOON ART
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 text-sm uppercase tracking-wider font-semibold hover:shadow-[0_0_10px_var(--neon-cyan)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-300 hover:text-neon-lime transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-neon-pink rounded-full text-[10px] flex items-center justify-center text-black font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-center text-gray-300 hover:text-neon-pink hover:bg-white/5 rounded-md text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
