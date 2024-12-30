import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#services');
    }
  };

  const navItems = [
    { label: 'Services', action: handleServicesClick },
    { label: 'À propos', path: '/about' },
    { label: 'Contact', action: () => {
      if (location.pathname === '/') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#contact');
      }
    }}
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-primary-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Brain className="w-8 h-8 text-secondary-400 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold text-white">AddVize</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-white hover:text-secondary-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-400 transition-all group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="text-white hover:text-secondary-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-400 transition-all group-hover:w-full"></span>
                </button>
              )}
            </motion.div>
          ))}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={toggleTheme}
            className="p-2 text-white hover:text-secondary-400 transition-colors relative group"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 transform group-hover:rotate-90 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 transform group-hover:rotate-90 transition-transform" />
            )}
          </motion.button>
        </div>

        <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} navItems={navItems} />
      </nav>
    </header>
  );
}