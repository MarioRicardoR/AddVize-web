import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-lg transform -rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Innovation technologique" 
              className="relative rounded-lg shadow-lg transform transition-transform hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Pourquoi choisir AddVize ?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              AddVize est votre partenaire de confiance pour l'intégration de l'IA dans votre stratégie marketing. 
              Nous combinons expertise technique et vision stratégique pour propulser votre entreprise vers de nouveaux sommets.
            </p>
            <div className="space-y-4">
              {[
                "Expertise en IA et marketing digital",
                "Solutions personnalisées et évolutives",
                "Accompagnement complet et formation",
                "Résultats mesurables et concrets"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="h-2 w-2 bg-secondary rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}