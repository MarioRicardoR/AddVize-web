import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, LineChart } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Audit SEO Complet",
    description: "Analyse approfondie de votre site et de votre positionnement actuel"
  },
  {
    icon: Target,
    title: "Stratégie Sur-Mesure",
    description: "Plan d'action personnalisé basé sur vos objectifs spécifiques"
  },
  {
    icon: LineChart,
    title: "Suivi en Temps Réel",
    description: "Tableaux de bord détaillés et rapports d'évolution mensuels"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <feature.icon className="w-12 h-12 text-secondary-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary-500 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}