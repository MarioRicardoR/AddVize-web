import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroScene from '../HeroScene';

interface HeroProps {
  onRequestDemo: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
  const metrics = [
    { value: "250%", label: "Augmentation moyenne du taux de conversion" },
    { value: "72h", label: "Délai de livraison garanti" },
    { value: "98%", label: "Taux de satisfaction client" }
  ];

  return (
    <section className="relative min-h-screen bg-primary-900 dark:bg-gray-900 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900/90" />
      <div className="relative container mx-auto px-6 py-12">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-secondary-400/10 border border-secondary-400/20">
              <span className="text-secondary-400 font-medium">Leader en création de sites web professionnels</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Votre Vision,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">
              Notre Expertise
            </span>
            <br />
            Site Premium en{' '}
            <span className="text-secondary-400">72h</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Transformez votre présence en ligne avec un site web qui génère des résultats concrets.
            <br />
            Design premium, performance optimale, conversion maximale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              onClick={onRequestDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Démarrer Votre Projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
            </motion.button>

            <a
              href="#portfolio"
              className="text-white hover:text-secondary-400 transition-colors flex items-center gap-2"
            >
              Voir Nos Réalisations
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
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
  );
}