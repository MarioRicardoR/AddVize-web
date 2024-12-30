import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RequestDemoForm from '../components/RequestDemoForm';
import Features from '../components/seo/Features';
import Results from '../components/seo/Results';

const metrics = [
  { value: "385%", label: "Augmentation moyenne du trafic organique" },
  { value: "6 mois", label: "Résultats visibles garantis" },
  { value: "92%", label: "Taux de rétention client" }
];

export default function SEO() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary-900 dark:bg-gray-900 overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/85 to-primary-900/95" />

        <div className="relative container mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-secondary-400/10 border border-secondary-400/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-secondary-400 font-medium">Expert en Référencement Naturel</span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
            >
              Dominez les Résultats Google
              <br />
              <span className="text-secondary-400">
                Résultats en 6 mois
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Optimisez votre visibilité en ligne avec notre expertise SEO avancée.
              <br />
              Stratégie personnalisée, résultats mesurables, croissance durable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <button
                onClick={() => setIsFormOpen(true)}
                className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Audit SEO Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
              </button>

              <a
                href="#results"
                className="text-white hover:text-secondary-400 transition-colors flex items-center gap-2"
              >
                Voir Nos Résultats
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl transition-all duration-300 group-hover:bg-secondary-400/10" />
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-secondary-400 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Results Section */}
      <Results />

      {/* Form Modal */}
      <RequestDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}