import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RequestDemoForm from '../components/RequestDemoForm';
import WebsiteShowcase from '../components/WebsiteShowcase';
import Hero from '../components/website/Hero';
import Features from '../components/website/Features';
import Benefits from '../components/website/Benefits';

export default function WebsiteBuilder() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero onRequestDemo={() => setIsFormOpen(true)} />
      <Features />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez nos dernières créations et laissez-vous inspirer
            </p>
          </motion.div>
          <WebsiteShowcase />
        </div>
      </section>

      <Benefits />

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-6">
              Prêt à Transformer Votre Présence en Ligne ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Commencez votre projet dès maintenant et obtenez un site web premium en 72h
            </p>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Demander une Démo
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Form Modal */}
      <RequestDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}