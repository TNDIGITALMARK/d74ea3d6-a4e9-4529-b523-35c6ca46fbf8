"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-foreground leading-none">
                Sacramento Premier
              </span>
              <span className="font-body text-xs text-muted-foreground">
                Contractors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:916-555-0123"
              className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-accent transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>(916) 555-0123</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              href="/"
              className="block px-4 py-2 font-body font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 font-body font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 font-body font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:916-555-0123"
              className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-all shadow-md mx-4"
            >
              <Phone className="w-4 h-4" />
              <span>(916) 555-0123</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
