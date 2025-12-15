import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Sacramento Premier Contractors
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Building dreams since 2010. Your trusted partner for all construction and renovation projects in Sacramento and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-secondary-foreground/80">Phone</p>
                  <a href="tel:916-555-0123" className="font-semibold hover:text-primary transition-colors">
                    (916) 555-0123
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-secondary-foreground/80">Email</p>
                  <a href="mailto:info@sacpremier.com" className="font-semibold hover:text-primary transition-colors">
                    info@sacpremier.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-secondary-foreground/80">Location</p>
                  <p className="font-semibold">Sacramento, CA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Sacramento Premier Contractors. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
