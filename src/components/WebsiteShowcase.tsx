import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  industry: string;
  features: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Mode",
    description: "Boutique en ligne moderne avec tunnel de conversion optimisé",
    image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=800&q=80",
    industry: "Mode & Lifestyle",
    features: ["Panier intelligent", "Paiement sécurisé", "Mobile-first"],
  },
  {
    id: 2,
    title: "Portfolio Créatif",
    description: "Site vitrine minimaliste avec animations fluides",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    industry: "Design & Créatif",
    features: ["Animations avancées", "Galerie dynamique", "Performance optimisée"],
  },
  {
    id: 3,
    title: "Cabinet Conseil",
    description: "Plateforme professionnelle B2B avec génération de leads",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    industry: "Services B2B",
    features: ["Prise de RDV", "Blog intégré", "CRM connecté"],
  }
];

export default function WebsiteShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium text-white bg-secondary-400 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Code className="w-4 h-4 mr-2" />
              <span>{project.industry}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}