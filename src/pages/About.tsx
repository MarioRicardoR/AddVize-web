import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Shield } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de l'IA pour créer des solutions marketing innovantes."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, avec un souci du détail incomparable."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec nos clients pour garantir leur succès."
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous maintenons les plus hauts standards d'éthique et de transparence."
  }
];

const timeline = [
  {
    year: "2017",
    title: "Découverte du potentiel de l'e-commerce",
    description: "Premier succès avec une campagne Facebook générant plus de 350€ de ventes en une nuit."
  },
  {
    year: "2018",
    title: "Lancement d'AddVize",
    description: "Création de l'agence spécialisée en génération de leads via Facebook Ads et Google Ads."
  },
  {
    year: "2020",
    title: "Expansion en France",
    description: "Développement sur le marché français et spécialisation dans les tunnels de vente."
  },
  {
    year: "2021",
    title: "Expansion Internationale",
    description: "Ouverture en Bulgarie et lancement du programme de coaching pour agences digitales."
  },
  {
    year: "2024",
    title: "Renouveau avec l'IA",
    description: "Repositionnement en tant qu'agence marketing IA de référence."
  }
];

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-primary-900 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
        <Background />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/90 to-primary-800/95" />
        <div className="relative container mx-auto px-4 sm:px-6 z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-secondary-200">
                    AddVize
                  </span>
                  <span className="text-secondary-400"> : </span>
                  <br />
                  <span className="text-white">Du Déclic du Digital</span>
                  <br />
                  <span className="text-white">à la </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-secondary-300">
                    Révolution
                  </span>
                  <span className="text-white"> de l'IA</span>
                </h1>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary-400 to-transparent max-w-xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              AddVize est née d'une passion pour l'innovation et d'une quête de solutions modernes en génération de leads et marketing digital. En 2017, Mario Ricardo, lassé du démarchage traditionnel, découvre le potentiel de l'e-commerce. Un simple test de publicité Facebook un samedi matin débouche sur plus de 350 € de ventes pendant la nuit : un déclic. L'automatisation et la puissance des leads s'imposent alors comme une évidence.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              Depuis 2018, AddVize aide des entreprises à générer des leads qualifiés grâce à Facebook Ads et Google Ads. Son succès rapide l'amène à s'étendre en France et en Bulgarie, et à partager son expertise avec d'autres agences en tant que coach.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              Après une immersion dans le monde de l'IA, AddVize se réinvente avec une mission claire : combiner l'intelligence artificielle et le marketing pour devenir un leader du marketing de demain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-500 dark:text-white"
          >
            Notre Parcours
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="w-32 text-right">
                  <span className="text-2xl font-bold text-secondary-400">
                    {item.year}
                  </span>
                </div>
                <div className="w-px h-24 bg-secondary-400 mx-8 relative">
                  <div className="absolute w-4 h-4 bg-secondary-400 rounded-full -left-[7px] top-1/2 -translate-y-1/2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-500 dark:text-white"
          >
            Nos Valeurs
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <value.icon className="w-12 h-12 text-secondary-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}