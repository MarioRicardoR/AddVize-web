import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Brain, 
  Clock, 
  Target, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Bot,
  CheckCircle 
} from 'lucide-react';
import RequestDemoForm from '../components/RequestDemoForm';
import HeroScene from '../components/HeroScene';

const metrics = [
  { value: "24/7", label: "Disponibilité garantie" },
  { value: "85%", label: "Taux de résolution automatique" },
  { value: "-60%", label: "Réduction de la charge de travail" }
];

const features = [
  {
    icon: Brain,
    title: "IA Avancée",
    description: "Notre chatbot utilise les dernières avancées en IA pour comprendre et répondre précisément aux questions."
  },
  {
    icon: Target,
    title: "Qualification Intelligente",
    description: "Qualifie automatiquement vos prospects selon vos critères et les guide vers la conversion."
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description: "Assure une présence continue et répond instantanément à toutes les demandes."
  }
];

const benefits = [
  {
    title: "Réduction des Coûts",
    description: "Diminuez jusqu'à 60% vos coûts de support client en automatisant les réponses aux questions fréquentes.",
    icon: Zap
  },
  {
    title: "Qualification Optimisée",
    description: "Identifiez et qualifiez vos prospects 24/7 grâce à des conversations naturelles et pertinentes.",
    icon: Target
  },
  {
    title: "Satisfaction Client",
    description: "Réponses instantanées et personnalisées pour une expérience client optimale.",
    icon: Users
  },
  {
    title: "Sécurité Maximale",
    description: "Protection des données et confidentialité assurée par des protocoles de sécurité avancés.",
    icon: Shield
  }
];

const useCases = [
  {
    title: "E-commerce",
    description: "Assistance à l'achat, suivi de commande, et support produit automatisé.",
    results: ["+45% de taux de conversion", "-35% de tickets support", "+28% de panier moyen"]
  },
  {
    title: "Services B2B",
    description: "Qualification des leads et prise de rendez-vous automatisée.",
    results: ["+75% de leads qualifiés", "-50% de temps de réponse", "+40% de meetings programmés"]
  },
  {
    title: "Support Client",
    description: "Résolution automatique des demandes courantes et escalade intelligente.",
    results: ["85% de résolution automatique", "-60% de charge de travail", "+90% de satisfaction client"]
  }
];

export default function Chatbot() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary-900 dark:bg-gray-900 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900/90" />

        <div className="relative container mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-secondary-400/10 border border-secondary-400/20 backdrop-blur-sm">
                <Bot className="w-4 h-4 text-secondary-400 mr-2" />
                <span className="text-secondary-400 font-medium">Assistant Virtuel Intelligent</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
            >
              Transformez votre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">
                Service Client avec l'IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Un assistant virtuel disponible 24/7 pour qualifier vos prospects,
              répondre aux questions et augmenter vos conversions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Essayer Gratuitement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
              </motion.button>

              <a
                href="#demo"
                className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors group"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Voir la Démo</span>
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
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
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10 transition-all duration-300 group-hover:border-secondary-400/20">
                    <div className="text-3xl font-bold text-secondary-400 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
              Un Assistant Virtuel Intelligent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Optimisez votre service client avec une solution IA avancée
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Découvrez comment notre chatbot IA transforme votre relation client
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
              Cas d'Utilisation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins spécifiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-secondary-400 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <RequestDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}