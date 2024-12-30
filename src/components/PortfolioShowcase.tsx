import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, ShoppingCart } from 'lucide-react';

interface PortfolioItem {
  id: number;
  industry: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  results: string[];
  icon: React.ElementType;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    industry: "E-commerce",
    title: "BoutiqueMode.fr",
    description: "Transformation d'une boutique traditionnelle en une expérience e-commerce moderne et performante.",
    beforeImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=800&q=80",
    results: [
      "+180% de taux de conversion",
      "-40% de taux de rebond",
      "3.5x plus de ventes en ligne"
    ],
    icon: ShoppingCart
  },
  {
    id: 2,
    industry: "B2B Services",
    title: "ConsultingPro",
    description: "Refonte complète d'un site vitrine en plateforme de génération de leads B2B.",
    beforeImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    results: [
      "+250% de leads qualifiés",
      "+150% de temps passé sur le site",
      "45% de réduction du coût par acquisition"
    ],
    icon: Users
  },
  {
    id: 3,
    industry: "SaaS",
    title: "TechSolution",
    description: "Création d'une plateforme SaaS moderne avec tunnel de conversion optimisé.",
    beforeImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    results: [
      "+200% d'inscriptions aux essais",
      "-35% de coût d'acquisition",
      "+90% de satisfaction client"
    ],
    icon: Zap
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nous transformons la présence en ligne de nos clients avec des résultats concrets.
          </p>
        </motion.div>

        <div className="space-y-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-secondary-400" />
                    <span className="text-secondary-400 font-semibold">
                      {item.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-500 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary-500 dark:text-white">
                      Résultats Obtenus:
                    </h4>
                    {item.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <ArrowRight className="w-4 h-4 text-secondary-400" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {result}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Before/After Images */}
                <div className="space-y-6">
                  <div className="relative">
                    <span className="absolute -top-3 left-4 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
                      Avant
                    </span>
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} avant`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -top-3 left-4 bg-secondary-400 text-white px-4 py-1 rounded-full text-sm">
                      Après
                    </span>
                    <img
                      src={item.afterImage}
                      alt={`${item.title} après`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}