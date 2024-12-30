import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path?: string;
  action?: (e: React.MouseEvent) => void;
}

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

const MobileNav = ({ isOpen, setIsOpen, navItems }: MobileNavProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 dark:text-gray-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <motion.nav className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 p-6 shadow-xl">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 dark:text-gray-300"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 10 }}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="block text-lg font-medium text-gray-900 dark:text-white hover:text-primary-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={(e) => {
                          if (item.action) {
                            item.action(e);
                            setIsOpen(false);
                          }
                        }}
                        className="block text-lg font-medium text-gray-900 dark:text-white hover:text-primary-500 w-full text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}
                
                <button
                  onClick={toggleTheme}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {isDark ? 'Mode clair' : 'Mode sombre'}
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;