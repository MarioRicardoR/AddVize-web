import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart2 } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Conversion Maximale",
    description: "Design orienté conversion pour transformer vos visiteurs en clients"
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Protection avancée contre les cybermenaces et conformité RGPD"
  },
  {
    icon: BarChart2,
    title: "Analytics Intégrés",
    description: "Suivez vos performances et prenez des décisions éclairées"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Avantages Clés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pourquoi choisir notre solution de création de sites web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-secondary-400 mb-4" />
              <h3 className="text-xl font-bold text-primary-500 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}