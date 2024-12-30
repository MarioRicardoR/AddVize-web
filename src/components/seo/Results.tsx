import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const results = [
  {
    title: "E-commerce Mode",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    metrics: [
      "+150% de trafic organique",
      "Top 3 pour les mots-clés ciblés",
      "ROI x3 en 6 mois"
    ]
  },
  {
    title: "Service B2B",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: [
      "+200% de leads qualifiés",
      "-40% de coût par acquisition",
      "Présence locale renforcée"
    ]
  }
];

export default function Results() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Résultats Prouvés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des résultats concrets pour nos clients à travers différents secteurs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {result.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {result.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-secondary-400 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}