import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Clock } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Design Premium",
    description: "Sites web modernes et responsifs avec une expérience utilisateur optimale"
  },
  {
    icon: Rocket,
    title: "Performance Optimale",
    description: "Chargement ultra-rapide et optimisation technique pour un meilleur référencement"
  },
  {
    icon: Clock,
    title: "Livraison en 72h",
    description: "Un site web professionnel prêt à l'emploi en seulement 72 heures"
  }
];

export default function Features() {
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
            Une Solution Complète
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour une présence en ligne performante
          </p>
        </motion.div>

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