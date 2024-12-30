import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: "Votre nouveau Site Web pro sans vous ruiner",
    description: "Un site web sur-mesure, optimisé pour le SEO et la conversion, à 1/4 du prix d'un développeur traditionnel, grâce aux nouveaux outils d'IA et sous la supervision de nos developpeurs pour une qualité irréprochable",
    link: "/services/website-builder"
  },
  {
    icon: Sparkles,
    title: "Passe en 1ère place sur Google",
    description: "Attirer plus de clients avec nos stratégies de contenu SEO avancées qui vous propulsent en avant des recherches Google, plus rapidement et à un fragment du prix habituel grâce à l'IA",
    link: "/services/seo"
  },
  {
    icon: Brain,
    title: "Votre Entreprise gagne en performance grâce aux IA",
    description: "Gagner en temps et productivité grâce à l'IA : nous formons vos équipes, et implémentons les outils IA adaptés à vos process pour vous faire gagner en productivité et résultats !",
    link: "/services/ai-consulting"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Services Marketing IA
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des solutions innovantes pour propulser votre présence en ligne
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
              >
                <div className="p-6">
                  <service.icon className="w-12 h-12 text-secondary-400 mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-primary-500 dark:text-white group-hover:text-secondary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-secondary-400 group-hover:text-secondary-500 transition-colors">
                    <span className="mr-2">En savoir plus</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-secondary-400 text-white rounded-full hover:bg-secondary-500 transition-colors group"
          >
            <span>Voir tous nos services</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}