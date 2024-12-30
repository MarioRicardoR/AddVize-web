import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// WhatsApp SVG icon component
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 448 512" 
    className="w-4 h-4"
    fill="#25D366"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-center font-montserrat text-base sm:text-lg">
            <span className="text-secondary-400">AddVize</span>© - Tous droits réservés
          </p>
          
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-secondary-400" />
              <a 
                href="mailto:admin@addvize.com"
                className="text-secondary-400 hover:text-secondary-300 transition-colors font-montserrat text-sm sm:text-base"
              >
                admin@addvize.com
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-secondary-400" />
              <a 
                href="tel:+32485634366"
                className="text-secondary-400 hover:text-secondary-300 transition-colors font-montserrat text-sm sm:text-base"
              >
                +32 485 63 43 66
              </a>
              <a 
                href="https://wa.me/32485634366"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity group relative"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <WhatsAppIcon />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Disponible sur WhatsApp
                </span>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-secondary-400" />
              <span className="text-secondary-400 font-montserrat text-sm sm:text-base text-center">
                Paris, France | Mons, Belgique
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm font-inter">
            <Link 
              to="/cgv"
              className="hover:text-secondary-400 transition-colors"
            >
              Conditions Générales de Vente
            </Link>
            <span className="hidden sm:inline text-gray-400">-</span>
            <Link 
              to="/mentions-legales"
              className="hover:text-secondary-400 transition-colors"
            >
              Mentions Légales
            </Link>
            <span className="hidden sm:inline text-gray-400">-</span>
            <Link 
              to="/politique-confidentialite"
              className="hover:text-secondary-400 transition-colors"
            >
              Politique de Confidentialité et RGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}